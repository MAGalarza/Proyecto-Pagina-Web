let header = ` <div class="divlogo">
<div class="logo">
    <img src="IMG/logo.png" alt="Logo">
</div>
<div class="divlogomarca">
    ASESORAMIENTO EMPRESARIAL INTEGRAL
</div>
</div>
<nav class="navegacion">
<ul class="menu">
    <li><a href="index .html">Inicio</a></li>
    <li><a href="Nosotros.html">Nosotros</a></li>
    <li><a href="#">Servicios</a>
        <ul class="submenu">
            <li><a href="asesoramientocontable.html">Asesoramiento Contable-Impositivo</a></li>
            <li><a href="asesoramientojuridico.html">Asesoramiento Juridico-Previsional</a></li>
            <li><a href="seguridadhigiene.html">Seguridad e Higiene Del Trabajo</a></li>
        </ul>
    </li>
    <li><a href="Contacto.html">Contacto</a></li>
</ul>
</nav>`
document.getElementById("idheader").innerHTML = header





let footer = `<div class="grupo-1">
 <div class="box">
     <h2>Sobre Nosotros</h2>
     <p>Un estudio de Asesoramiento Integral es un grupo de personas capacitadas que se encarga
         de:</p>
     <ul>
         <li>Asesorar a empresas y particulares en cuestiones impositivas y contables.</li>
         <li>Gestionar sus impuestos y demás obligaciones fiscales, de seguridad y de su personal, engranaje
             fundamental
             de una empresa.</li>
         <li>Profesionales altamente capacitados.</li>
         <li>Ejecutividad ante las consultas de un contriibuyente.</li>
     </ul>
 </div>

 <div class="box">
     <h2>Sitios de interes</h2>
     <a href="https://www.afip.gob.ar/" target="_blank" rel="noopener noreferrer">Ingreso a AFIP</a><br>
     <a href="https://www.argentina.gob.ar/srt" target="_blank" rel="noopener noreferrer">Ingreso a Mi
         Argentina</a><br>
     <a href="https://www.agip.gob.ar/" target="_blank" rel="noopener noreferrer">Ingreso a AGIP</a><br>
     <a href="https://www.arba.gov.ar/" target="_blank" rel="noopener noreferrer">Ingreso a ARBA</a><br>
     <a href="https://www.anses.gob.ar/" target="_blank" rel="noopener noreferrer">Ingreso a Anses</a><br>
 </div>

 <div class="box">
     <h2>Seguinos</h2>
     <div class="red-social">
         <a href="https://www.facebook.com/" target="_blank" class="fa fa-facebook"></a>
         <a href="https://www.instagram.com/" target="_blank" class="fa fa-instagram"></a>
         <a href="https://www.linkedin.com/feed/" target="_blank" class="fa fa-linkedin"></a>
     </div>
 </div>

 <div class="grupo-2">
     <div class="box">
         <small> <b>Equipo N° 2 - Segundo Cuatrimestre 2023 <br> Comision-23532</b></small>
     </div>
 </div>
</div>`
document.getElementById("idfooter").innerHTML = footer