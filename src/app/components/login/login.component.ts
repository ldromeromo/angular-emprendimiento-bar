import { Component, OnInit } from '@angular/core'; 
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ValidateService } from '../../service/validate.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  registroForm: FormGroup;
  public isLoading: boolean = true;
  isUserAuthorized: boolean = false;
  showError: boolean = false;
  dialogMessage: string = '';

  constructor(
    private formBuilder: FormBuilder,
    public route: ActivatedRoute,
    private http: HttpClient,
    private validate: ValidateService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.registroForm = this.formBuilder.group({
      usuario: ['', Validators.required],
      contraseña: ['', Validators.required]
    });
  }

  onLogin() {
    if (this.registroForm.valid) {
      const usuario = this.registroForm.get('usuario')?.value;
      const contraseñaIngresada = this.registroForm.get('contraseña')?.value;

      // Llamada al servicio para obtener los usuarios desde la API
      this.validate.getUsers().subscribe({
        next: (usuarios: any[]) => {
          console.log("Usuarios obtenidos:", usuarios);
          const usuarioEncontrado = usuarios.find(u => u.usuario === usuario);

          if (usuarioEncontrado) {
            // Decodificación de la contraseña almacenada
            const contrasenaDecodificada = atob(usuarioEncontrado.contrasena);

            if (contrasenaDecodificada === contraseñaIngresada) {
              this.validate.set_nh_user(usuario);
              this.router.navigate(['/home']);
            } else {
              this.showError = true;
              this.dialogMessage = 'Contraseña incorrecta. Por favor verifica tus credenciales.';
            }
          } else {
            this.showError = true;
            this.dialogMessage = 'Usuario no encontrado. Por favor verifica tus credenciales.';
          }
        },
        error: (error) => {
          console.error("Error en la solicitud:", error);
          this.showError = true;
          this.dialogMessage = 'Error al conectar con el servidor. Intenta nuevamente más tarde.';
        }
      });
    } else {
      this.registroForm.markAllAsTouched();
      this.showError = true;
      this.dialogMessage = 'Por favor completa todos los campos obligatorios.';
    }
  }
}
