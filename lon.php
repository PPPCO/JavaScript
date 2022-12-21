
<?php 

require "../../functions/apiserver.php";

session_start();
$token="71f624bbe763821187d0fa24694efe25cf7";
if ($_REQUEST["logout"] == "true") {
  session_unset();
  session_destroy();
  //echo 'logout';
  echo '<script> window.location = "./login";</script>';
    die();
}
// var_dump($_REQUEST["email"]);
// var_dump($_REQUEST["pass"]);

if (isset($_REQUEST["login"])) {
    $email = $_REQUEST["email"];
    // $password = $_REQUEST["pass"];
    $mensaje_error = "";

    $_SESSION["token"] = $token;
   // var_dump($_SESSION["token"]);
    $opts = [
        "http" => [
            "method" => "GET",
            "header" => 
                "token: ".$_SESSION["token"]." \r\n"
        ]
    ];
    $context = stream_context_create($opts);
    $response = file_get_contents($global_apiserver.'/public/usuarios/login/usuarios/publicos_trece_inversiones/?email='.$email, false, $context);
    $reponse2 = file_get_contents($global_apiserver.'/public/crowfounding/proyectos_activos/', false, $context);

    $usuario = json_decode($response);

  if($usuario!=null){
    if( $usuario->response == "success" ){
        $_SESSION["logged_in"] = "true";
        $_SESSION["usuario"] = $usuario->data;
        $_SESSION["sesion"] = $usuario->data->HASH;
        $email=$usuario->data->EMAIL;
        //var_dump($_SESSION);
        echo '<script> window.location = "./panel-inversionista-propiedades-disponibles&email='.$email.'";</script>';
    }
    if( $usuario->response2 == "success" ){
        $_SESSION["logged_in"] = "true";
        $_SESSION["usuario"] = $usuario->data;
        $_SESSION["sesion"] = $usuario->data->HASH;
        $email=$usuario->data->EMAIL;
        //var_dump($_SESSION);
        echo $logged_inversionista["ID"] ? '<script>let inversionista = ' . json_encode($logged_inversionista) . '</script>' : '<script>let inversionista = null </script>';
        echo '<script> window.location = "./panel-proyectos-user&email='.$email.'";</script>';
    }

    else{
        $mensaje_error = $usuario->message;    
      //  var_dump($mensaje_error);
    }
  }
  else{
    $mensaje_error = "Acceso incorrecto, error no controlado";
  }
}
?>
<style type="text/css">
    #ul-header-page {
        visibility: hidden;
    }
    #toogle-mobile-nav {
        display: none !important;
    }
</style>
<script src="../../functions/sweetalert2.all.js"></script>
    <!--====== PAGE TITLE PART START ======-->
    
    <section class="page-title-area bg_cover" style="background-image: url(<?php echo $global_public_repo . '/' . $SECCIONES["PROYECTOS"]["imagen-misproyectos-1"][0]; ?>); ">
        <div class="container">
            <div class="row">
                <div class="col-lg-12">
                    <div class="page-title-content">
                        <h3 class="title">Bienvenido</h3>
                    </div>
                </div>
            </div>
        </div>
    </section>
    
    <!--====== PAGE TITLE PART ENDS ======-->

    <!--====== CONTACT FORM PART START ======-->
    
    <section class="contact-form-area">
        <div class="container">
            <div class="row justify-content-center">
                <div class="col-lg-8">
                    <div class="section-title text-center">
                        <span>Entra para revisar proyectos</span>
                        <h3 class="title">Iniciar sesión</h3>
                    </div>
                </div>
            </div>
            <div class="row justify-content-center">
                <div class="col-lg-8">
                    <form id="contactForm" method="POST">
                        <div class="conact-form-item"> 
                            <div class="row">
                                <div class="col-lg-2 col-md-6"></div>
                                <div class="col-lg-8 col-md-6">
                                    <div class="input-box mt-20">
                                        <input type="text" placeholder="Email" id="email" name="email">
                                    </div>
                                </div>
                                <div class="col-lg-2 col-md-6"></div>
                                <div class="col-lg-2 col-md-6"></div>
                                <!-- <div class="col-lg-8 col-md-6">
                                    <div class="input-box mt-20">
                                        <input type="password" placeholder="Contraseña" id="pass" name="pass">
                                    </div>
                                </div> -->
                                <div class="col-lg-2 col-md-6"></div>
                                <div class="col-lg-12">
                                    <div class="input-box mt-20 text-center">
                                        <a style="color: #B79F5B;" href="./correo-contraseña">Recuperar contraseña</a><br><br>
                                        <button class="main-btn" type="submit" name="login" value="login">Entrar</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </form>
                    <?php 
               if($mensaje_error != ""): ?>
                <script type="text/javascript">                    
                     Swal.fire({
                                title: "Atención!",
                                text: "<?php echo $mensaje_error; ?>",
                                icon: "error",
                                comfirmButtonText: "Ok"
                            }).then(result => {
                                if (result.isConfirmed) {
                                     window.location = "./login";
                                }else{
                                }
                            })
                 </script>
              <?php endif; ?>
                </div>
            </div>
        </div>
    </section>
    <!--====== CONTACT FORM PART ENDS ======-->

















    <?php 

require "../../functions/apiserver.php";

session_start();
$token="71f624bbe763821187d0fa24694efe25cf7";
if ($_REQUEST["logout"] == "true") {
  session_unset();
  session_destroy();
  //echo 'logout';
  echo '<script> window.location = "./login";</script>';
    die();
}
// var_dump($_REQUEST["email"]);
// var_dump($_REQUEST["pass"]);

if (isset($_REQUEST["login"])) {
    $email = $_REQUEST["email"];
    // $password = $_REQUEST["pass"];
    $mensaje_error = "";

    $_SESSION["token"] = $token;
   // var_dump($_SESSION["token"]);
    $opts = [
        "http" => [
            "method" => "GET",
            "header" => 
                "token: ".$_SESSION["token"]." \r\n"
        ]
    ];
    $context = stream_context_create($opts);
    $response = file_get_contents($global_apiserver.'/public/usuarios/login/usuarios/publicos_trece_inversiones/?email='.$email, false, $context);
    $reponse2 = file_get_contents($global_apiserver.'/public/crowfounding/proyectos_activos/', false, $context);

    $usuario = json_decode($response);

  if($usuario!=null){
    if( $usuario->response == "success" ){
        $_SESSION["logged_in"] = "true";
        $_SESSION["usuario"] = $usuario->data;
        $_SESSION["sesion"] = $usuario->data->HASH;
        $email=$usuario->data->EMAIL;
        //var_dump($_SESSION);
        echo '<script> window.location = "./panel-inversionista-propiedades-disponibles&email='.$email.'";</script>';
    }
    if( $usuario->response2 == "success" ){
        $_SESSION["logged_in"] = "true";
        $_SESSION["usuario"] = $usuario->data;
        $_SESSION["sesion"] = $usuario->data->HASH;
        $email=$usuario->data->EMAIL;
        //var_dump($_SESSION);
        echo $logged_inversionista["ID"] ? '<script>let inversionista = ' . json_encode($logged_inversionista) . '</script>' : '<script>let inversionista = null </script>';
        echo '<script> window.location = "./panel-proyectos-user&email='.$email.'";</script>';
    }

    else{
        $mensaje_error = $usuario->message;    
      //  var_dump($mensaje_error);
    }
  }
  else{
    $mensaje_error = "Acceso incorrecto, error no controlado";
  }
}
?>
    <!--====== PAGE TITLE PART START ======-->
    
    <section class="page-title-area bg_cover" style="background-image: url(assets/images/page-title-bg.jpg);">
        <div class="container">
            <div class="row">
                <div class="col-lg-12">
                    <div class="page-title-content">
                        <h3 class="title">Formulario</h3>
                        <nav aria-label="breadcrumb">
                            <ol class="breadcrumb">
                                <li class="breadcrumb-item"><a href="#"></a></li>
                                <li class="breadcrumb-item active" aria-current="page"></li>
                            </ol>
                        </nav>
                    </div>
                </div>
            </div>
        </div>
    </section>
    
    <!--====== PAGE TITLE PART ENDS ======-->

    <!--====== CONTACT FORM PART START ======-->
    
    <section class="contact-form-area">
        <div class="container" id="formulario">
            <div class="row justify-content-center">
                <div class="col-lg-8">
                    <div class="section-title text-center">
                        <h3 class="title">Llena los siguientes campos</h3>
                        <span>Crea tu cuenta</span>                        
                    </div>
                </div>
            </div>
            <div class="row justify-content-center" v-if="registro =='nuevo'">
                <div class="col-lg-8">
                    <form id="contact-form">
                        <div class="conact-form-item">
                            <div class="row">
                                <div class="col-lg-12 col-md-12 text-center">
                                    <h5>Al crear tu cuenta en Trece Inversiones aceptas el 
                                        <a href="<?=$ref_rel;?>aviso-de-privacidad" target="_blank">Aviso de Privacidad</a>,
                                         los <a href="#">Derechos Arco</a> 
                                         y los <a href="#">Términos y Condiciones</a></h5>
                                </div>
                                <div class="col-lg-12 col-md-12">
                                    <div class="input-box mt-20">
                                        <input type="text" placeholder="Nombre" v-model="inversionista.NOMBRE" @blur="">
                                    </div>
                                </div>
                                <div class="col-lg-12 col-md-12">
                                    <div class="input-box mt-20">
                                        <input type="text" placeholder="Apellidos" v-model="inversionista.APELLIDOS">
                                    </div>
                                </div>
                                <div class="col-lg-12 col-md-12">
                                    <div class="input-box mt-20">
                                        <input type="email" placeholder="Correo" v-model="inversionista.CORREO">
                                    </div>
                                </div>
                                <div class="col-lg-12 col-md-12">
                                    <div class="input-box mt-20">
                                        <input type="password" placeholder="Contraseña" v-model="inversionista.CONTRASEÑA">
                                    </div>
                                </div>
                                <div class="col-lg-12 col-md-12">
                                    <div class="input-box mt-20">
                                        <input type="password" placeholder="Confirmar contraseña" v-model="inversionista.REPCONTRASEÑA" @blur="contraseñas()">
                                    </div>
                                </div>
                                <div class="col-lg-12">
                                    <div class="input-box mt-20 text-center">
                                        <button class="main-btn" type="submit" @click="guardar_nuevo()">Siguiente</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div> 
            <div class="row justify-content-center" v-if="registro =='generales'">
                <div class="col-lg-8">
                    <form id="contact-form">
                        <div class="conact-form-item">
                            <div class="row">
                                <div class="col-lg-12 col-md-12">
                                    <label>Selecciona un género:</label>
                                    <select class="col-9" v-model="inversionista.GENERO" style="height: 100%;width: 100%;border-color: #B79F5B;border-radius: 7px;border-width: medium;">
                                        <option value="MASCULINO">MASCULINO</option>
                                        <option value="FEMENINO">FEMENINO</option>                                      
                                    </select>
                                </div>
                                <div class="col-lg-12 col-md-12">
                                    <div class="input-box mt-20">
                                        <input type="date" placeholder="Fecha de nacimiento" v-model="inversionista.FECHA">
                                    </div>
                                </div>
                                <div class="col-lg-12 col-md-12">
                                    <div class="input-box mt-20">
                                        <input type="text" placeholder="País de nacimiento" v-model="inversionista.NACIONALIDAD">
                                    </div>
                                </div>
                                <div class="col-lg-12 col-md-12">
                                    <div class="input-box mt-20">
                                        <input type="text" placeholder="Estado de nacimiento" v-model="inversionista.ESTADO">
                                    </div>
                                </div>
                                <div class="col-lg-12 col-md-12">
                                    <div class="input-box mt-20">
                                        <input type="tel" placeholder="Número de teléfono" v-model="inversionista.NUMERO" id="phone">
                                    </div>
                                </div>
                                <div class="col-lg-12">
                                    <div class="input-box mt-20 text-center">
                                        <button class="main-btn" type="submit" @click="guardar_datos(registro)">Siguiente</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>     
            <div class="row justify-content-center" v-if="registro =='perfil'">
                <div class="col-lg-8">
                    <form id="contact-form">
                        <div class="conact-form-item">
                            <div class="row">
                                <div class="col-lg-12 col-md-12">
                                    <div class="input-box mt-20">
                                        <input type="text" placeholder="¿Cuánto es el monto que planeas invertir en TRECE Inversiones?" v-model="inversionista.INVERSION">
                                    </div>
                                </div>
                                <div class="col-lg-12 col-md-12 text-center" style="margin-top:10px;">
                                    <p class="form-message">¿Conoce o es el Dueño Beneficiario que participa en actividades vulnerables?</p>
                                        <input type="radio" name="propietario" value="SI" v-model="inversionista.PROPIETARIO">
                                        <label for="si">SI</label>
                                        <input type="radio" name="propietario" value="NO" style="margin-left: 50px;" v-model="inversionista.PROPIETARIO">
                                        <label for="no">NO</label>
                                </div>
                                <div class="col-lg-12 col-md-12 text-center">
                                    <p class="form-message">¿Es es el administrador único o representante legal?</p>
                                        <input type="radio" name="recursos" value="SI" v-model="inversionista.REPRESENTANTE_LEGAL">
                                        <label for="si">SI</label>
                                        <input type="radio" name="recursos" value="NO" style="margin-left: 50px;" v-model="inversionista.REPRESENTANTE_LEGAL">
                                        <label for="no">NO</label>
                                </div>
                                <div class="col-lg-12">
                                    <div class="input-box mt-20 text-center">
                                        <button class="main-btn" type="submit" @click="guardar_datos(registro)">Siguiente</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
            <section class="contact-form-area">
                <div class="container">
                    <div class="row justify-content-center" v-if="registro =='domicilio'">
                        <div class="col-lg-8">
                            <form id="contactform" method="POST">
                                <div class="conact-form-item">
                                    <div class="row">
                                    <!-- <div class="col-lg-6 col-md-6">
                                            <div class="input-box mt-20">
                                                <input type="text" placeholder="Tipo de vía" v-model="inversionista.VIA" @blur="">
                                            </div>
                                        </div> -->
                                        <div class="col-lg-6 col-md-6">
                                            <div class="input-box mt-20">
                                                <input type="text" placeholder="Calle" v-model="inversionista.CALLE">
                                            </div>
                                        </div>
                                        <div class="col-lg-6 col-md-6">
                                            <div class="input-box mt-20">
                                                <input type="text" placeholder="Num. exterior" v-model="inversionista.NUM_EXTERIOR">
                                            </div>
                                        </div>
                                        <div class="col-lg-6 col-md-6">
                                            <div class="input-box mt-20">
                                                <input type="text" placeholder="Num. interior" v-model="inversionista.NUM_INTERIOR">
                                            </div>
                                        </div>
                                        <div class="col-lg-6 col-md-6">
                                            <div class="input-box mt-20">
                                                <input type="number" placeholder="Código postal" v-model="inversionista.CP">
                                            </div>
                                        </div>
                                        <div class="col-lg-6 col-md-6">
                                            <div class="input-box mt-20">
                                                <input type="text" placeholder="Colonia" v-model="inversionista.COLONIA">
                                            </div>
                                        </div>
                                        <!-- <div class="col-lg-6 col-md-6">
                                            <div class="input-box mt-20">
                                                <input type="text" placeholder="Ciudad o población" v-model="inversionista.CIUDAD">
                                            </div>
                                        </div>   -->
                                        <div class="col-lg-6 col-md-6">
                                            <div class="input-box mt-20">
                                                <input type="text" placeholder="Municipio" v-model="inversionista.MUNICIPIO">
                                            </div>
                                        </div>   
                                        <div class="col-lg-6 col-md-6">
                                            <div class="input-box mt-20">
                                                <input type="text" placeholder="Estado" v-model="inversionista.ESTADO_DOMICILIO">
                                            </div>
                                        </div> 
                                        <div class="col-lg-6 col-md-6">
                                            <div class="input-box mt-20">
                                                <input type="text" placeholder="País" v-model="inversionista.PAIS_DOMICILIO">
                                            </div>
                                        </div> 
                                        <div class="col-lg-6 col-md-6" >
                                            <div class="input-box mt-20">
                                                <!-- <input type="text" id="email" name="email" placeholder="Correo del usuario" v-model="mail_usu" > -->
                                                <input type="text" placeholder="Email" id="email" name="email" v-model="mail_usu">
                                            </div>
                                        </div>             
                                        <div class="col-lg-12">
                                            <div class="input-box mt-20 text-center">
                                                <button class="main-btn" type="submit" name="login" value="login">Loguarme</button>
                                                <button class="main-btn" type="submit" name="login" value="login">Entrar</button>
                                                <button class="main-btn" @click="guardar_datos(registro)">Siguiente</button>
                                                
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </form>
                            <?php 
                    if($mensaje_error != ""): ?>
                        <script type="text/javascript">                    
                            Swal.fire({
                                        title: "Atención!",
                                        text: "<?php echo $mensaje_error; ?>",
                                        icon: "error",
                                        comfirmButtonText: "Ok"
                                    }).then(result => {
                                        if (result.isConfirmed) {
                                            window.location = "./login";
                                        }else{
                                        }
                                    })
                        </script>
                    <?php endif; ?>
                        </div>
                    </div>
                </div>

            </section>                                                                                    
        </div>
    </section>

<?= $_REQUEST['id'] ? '<script>var id = '.$_REQUEST['id'].'</script>' : '<script>var id = null </script>'?>