
function loadHTML() {
    /*
    fetch('../pages/footer.html')
    .then(response=> response.text())
    .then(text=> document.getElementById('footer').innerHTML = text);
    */

    let html = '';
    html += '    <br><br>'
    html += '        <footer class="fixed-bottom text-center footer-style py-2">'
    html += '            <div class="container-fluid">'
    html += '                <div class="row align-items-center">'
    html += '                    <div class="col">'
    html += '                        TecnoTienda™ Todos los derechos reservados'
    html += '                    </div>'
    html += '                    <div class="col">'
    html += '                        <div class="row justify-content-center">'
    html += '                            <div class="px-3">'
    html += '                                <a target="_blank" href="https://www.Twitter.com" class="btn-social btn-outline"><i class="bi-twitter bi-twitter-color ri-2x"></i></a>'
    html += '                            </div>'
    html += '                            <div class="px-3">'
    html += '                                <a target="_blank" href="https://www.Facebook.com" class="btn-social btn-outline"><i class="bi-facebook bi-facebook-color ri-2x"></i></a>'
    html += '                            </div>'
    html += '                            <div class="px-3">'
    html += '                                <a target="_blank" href="https://www.instagram.com" class="btn-social btn-outline"><i class="bi-instagram bi-instagram-color ri-2x"></i></a>'
    html += '                            </div>'
    html += '                        </div>'
    html += '                    </div>'
    html += '                    <div class="col">'
    html += '                        <div class="iconos text-right p-2">'
    html += '                            <img src="https://www.brooksfieldstore.com/modules/themeeditor/img/footer_logo_1.jpg">'
    html += '                        </div>'
    html += '                    </div>'
    html += '                </div>'
    html += '            </div>'
    html += '        </footer>'
    document.getElementById('footer').innerHTML = html;

}

loadHTML();  