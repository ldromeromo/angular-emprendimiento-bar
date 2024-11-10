import { Component, OnInit, OnDestroy, ChangeDetectorRef } from '@angular/core';
import { interval, Subscription, timeout } from 'rxjs';
import { MessageService } from 'primeng/api';
import { LeadsService } from 'src/app/service/leads.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { ValidateService } from '../../service/validate.service';
import { DialogModule } from 'primeng/dialog';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  registroForm: FormGroup;
  cluster: any[] = [];
  namespace: any[] = [];
  deployment: any[] = [];
  allData: any[] = [];
  nh_user: string;
  displayDialog: boolean = false;   
  dialogMessage: string = '';   
  public isLoading: boolean = true;
  isUserAuthorized: boolean = false;
  messages_error: string = 'No puedes acceder a este módulo sin autenticarte previamente'


  constructor(
    private messageService: MessageService,
    private leadService: LeadsService,
    private fb: FormBuilder,
    private http: HttpClient,
    private cdr: ChangeDetectorRef,
    public route: ActivatedRoute,
    private validate: ValidateService,
  ) { }

  ngOnInit(): void {
    
    // this.nh_user = this.validate.get_nh_user();
    
    // this.registroForm = this.fb.group({
    //   cluster: [null, Validators.required],
    //   namespace: [null, Validators.required],
    //   deployment: [null, Validators.required]
    // });
    // // Realizar la validación del usuario antes de cargar el resto de los datos
    // this.validarUsuario();

    // // this.cargarData();

    // this.registroForm.get('cluster').valueChanges.subscribe(clusterId => {
    //   this.onClusterChange(clusterId);
    // });

    // this.registroForm.get('namespace').valueChanges.subscribe(namespaceId => {
    //   this.onNamespaceChange(namespaceId);
    // });
  }

  validarUsuario() {
    const url = 'https://portalcloud.telefonicawebsites.co/api-ambientes-test/telefonica/service/v1/api-ambientes-test/usuarios';

    this.http.get<any[]>(url).subscribe((data: any[]) => {
      // Buscar el usuario en los datos recibidos
      const userExists = data.some(item => item.user_account === this.nh_user);
      
      // Si el usuario tiene algún registro con admin 0, pasar "all"
      const usuarioData = data.filter(item => item.user_account === this.nh_user);
      const hasDeploymentZero = usuarioData.some(item => item.admin === 1);

      // Si tiene admin 0, pasar "all", de lo contrario, pasar el usuario normal
      const usuario = hasDeploymentZero ? "all" : this.nh_user;

      if (userExists) {
        this.isUserAuthorized = true; // Si el usuario existe, mostramos el contenido
        this.cargarData(usuario);
      } else {
        this.isUserAuthorized = false; // Si no existe, se bloquea el contenido
        this.dialogMessage = 'El usuario no está autorizado para acceder a esta página.';
        this.isLoading = false;
      }
      
    }, error => {
      console.error('Error al consultar el API:', error);
      this.isUserAuthorized = false;
      this.dialogMessage = 'Error al consultar los datos. Inténtalo más tarde.';
      this.isLoading = false;
    });
  }

  cargarData(usuario) {
    const url_consulta = 'https://portalcloud.telefonicawebsites.co/api-ambientes-test/telefonica/service/v1/api-ambientes-test/ambientes/' + usuario
    console.log(url_consulta)
    this.http.get(url_consulta).subscribe((data: any) => {
      console.log('Datos recibidos:', data);
      this.isLoading = false;

      // Convertir IDs a números 
      this.allData = data.map(item => ({
        ...item,
        cluster_id: Number(item.cluster_id),
        namespace_id: Number(item.namespace_id),
        deployment_id: Number(item.deployment_id)
      }));
      
      // Obtener clusters únicos
      const clustersMap = new Map();
      this.allData.forEach((item: any) => {
        if (!clustersMap.has(item.cluster_id)) {
          clustersMap.set(item.cluster_id, {
            label: item.cluster_name,
            value: item.cluster_id,
            platform: item.cluster_platform
          });
        }
      });
      this.cluster = Array.from(clustersMap.values());
    });
    console.log("data cargada")
  }

  onClusterChange(clusterId: number): void {
    const clusterIdNumber = Number(clusterId);
    console.log('Cluster seleccionado:', clusterIdNumber);

    const namespacesMap = new Map();
    this.allData.forEach(item => {
      // console.log('Comparando item.cluster_id:', item.cluster_id, 'con clusterIdNumber:', clusterIdNumber);
      if (item.cluster_id === clusterIdNumber) {
        if (!namespacesMap.has(item.namespace_id)) {
          namespacesMap.set(item.namespace_id, {
            label: item.namespace_name,
            value: item.namespace_id
          });
        }
      }
    });
    this.namespace = Array.from(namespacesMap.values());

    // Limpiar los valores seleccionados previamente
    this.registroForm.get('namespace').setValue(null);
    this.registroForm.get('deployment').setValue(null);
    this.deployment = [];
  }

  onNamespaceChange(namespaceId: number): void {
    const namespaceIdNumber = Number(namespaceId);
    console.log('Namespace seleccionado:', namespaceIdNumber);

    const deploymentsMap = new Map();
    this.allData.forEach(item => {
      // console.log('Comparando item.namespace_id:', item.namespace_id, 'con namespaceIdNumber:', namespaceIdNumber);
      if (item.namespace_id === namespaceIdNumber) {
        if (!deploymentsMap.has(item.deployment_id)) {
          deploymentsMap.set(item.deployment_id, {
            label: item.deployment_name,
            value: item.deployment_id
          });
        }
      }
    });
    this.deployment = Array.from(deploymentsMap.values());

    // Limpiar el valor seleccionado previamente
    this.registroForm.get('deployment').setValue(null);
  }

  escalado(replica: number): void {
    if (this.registroForm.invalid) {
      this.messageService.add({ severity: 'warn', summary: 'Advertencia', detail: 'Por favor, completa todos los campos requeridos.' });
      return;
    }
    this.isLoading = true;
    console.log('Inicia proceso escalado');

    const formData = this.registroForm.value;

    const selectedCluster = this.cluster.find(item => item.value === Number(formData.cluster));
    const selectedNamespace = this.allData.find(item => item.namespace_id === Number(formData.namespace));
    const selectedDeployment = this.allData.find(item => item.deployment_id === Number(formData.deployment));

    const data = {
      "cluster": selectedCluster ? selectedCluster.label : null,
      "deployment": selectedDeployment ? selectedDeployment.deployment_name : null,
      "namespace": selectedNamespace ? selectedNamespace.namespace_name : null,
      "deployment_id": formData.deployment,
      "usuario": this.nh_user,
      "replicas": replica,
      "plataform": selectedCluster ? selectedCluster.platform  : null
    };

    console.log('Datos para enviar:', data);
    this.messageService.add({ severity: 'success', summary: 'Éxito', detail: 'Escalado realizado con éxito' });
    const url = 'https://portalcloud.telefonicawebsites.co/api-ambientes-test/telefonica/service/v1/api-ambientes-test/update_desa';

    this.http.post(url, data, { observe: 'response' }).subscribe(
      (response) => {
        this.isLoading = false;
        console.log('Respuesta del servidor:', response);
        // Verificar si la respuesta contiene "deployment.apps/portalcloud scaled"
        if (response.status === 201) {
          this.dialogMessage = 'El proceso se realizó con éxito.';
        } else {
          this.dialogMessage = 'El escalado no se completó correctamente, ' + response + '. Por favor intente más tarde.';
        }
        this.displayDialog = true;
      },
      (error) => {
        this.isLoading = false;
        console.error('Error al escalar:', error);
        this.dialogMessage = 'Hubo un error al realizar el proceso.' + error.error;
        this.displayDialog = true;
      }
    );
  }
}
