

$(document).ready(function () {


    var x_testa = 25;
    var y_testa = 25;

    var serpente = [
        [x_testa, y_testa],
        [24, 25],
        [23, 25],
        [22, 25],
        [21, 25],
        [20, 25],
    ]


    var direzione = 39;
    var go;


    crea_cibo();

    $('body').keydown(function (e) {
        $('body').removeClass('paused');
        $('body').addClass('active');
        //Devo fare tutti i possibili casi per fare in modo che lo snake non possa tornare indietro
        switch (e.keyCode) {
            case 32:
                if (!$('body').hasClass('paused')) {
                    game_pause();
                }
                break;
            case 38:
                clearInterval(go);
                go = setInterval(function () {
                    change_direction_up();
                    stampa_serpente();
                }, 80);
                break;

            case 39:
                clearInterval(go);
                go = setInterval(function () {
                    change_direction_right();
                    stampa_serpente();
                }, 80);
                break;

            case 37:
                clearInterval(go);
                go = setInterval(function () {
                    change_direction_left();
                    stampa_serpente();
                }, 80);
                break;

            case 40:
                clearInterval(go);
                go = setInterval(function () {
                    change_direction_down();
                    stampa_serpente();
                }, 80);
                break;

            default:
                break;
        }
    });

    $('.game_pause').click(function () {
        game_pause();
    });




    function svuota_campo() {
        $('.cella').removeClass('segmento_serpente')
    }

    function stampa_serpente() {
        svuota_campo();
        serpente.forEach(function (item, index, arr) {
            $('.cella[data-x=' + arr[index][0] + '][data-y=' + arr[index][1] + ']').addClass('segmento_serpente');
        })
    }

    function change_direction_up() {
        x_testa = x_testa;
        y_testa = y_testa + 1;
        serpente.unshift([x_testa, y_testa]);
        serpente.pop();
        check_cibo('up');
        check_sconfitta();
    }
    function change_direction_down() {
        x_testa = x_testa;
        y_testa = y_testa - 1;
        serpente.unshift([x_testa, y_testa]);
        serpente.pop();
        check_cibo('down');
        check_sconfitta();
    }
    function change_direction_left() {
        x_testa = x_testa - 1;
        y_testa = y_testa;
        serpente.unshift([x_testa, y_testa]);
        serpente.pop();
        check_cibo('left');
        check_sconfitta();
    }
    function change_direction_right() {
        x_testa = x_testa + 1;
        y_testa = y_testa;
        serpente.unshift([x_testa, y_testa]);
        serpente.pop();
        check_cibo('right');
        check_sconfitta();
    }

    function game_pause() {
        clearInterval(go);
        $('body').addClass('paused');
    }

    function check_sconfitta() {
        if (y_testa == 51 || y_testa == 0 || x_testa == 0 || x_testa == 51) {
            game_over();
        }
        if (chkDuplicates(serpente, true)) {
            game_over();
        }
    }

    function game_over(){
        alert('Hao perso!');
    }

    function check_cibo(dir) {
        if ($('.cella[data-x=' + x_testa + '][data-y=' + y_testa + ']').hasClass('food')) {
            if (dir == 'up') {
                serpente.push([x_testa, y_testa + 1]);
                $('.food').removeClass('food');
                crea_cibo();
            } 
            if(dir == 'down'){
                serpente.push([x_testa, y_testa - 1]);
                $('.food').removeClass('food');
                crea_cibo();
            }
            if(dir == 'left'){
                serpente.push([x_testa - 1, y_testa]);
                $('.food').removeClass('food');
                crea_cibo();
            }
            if(dir == 'right'){
                serpente.push([x_testa +1, y_testa]);
                $('.food').removeClass('food');
                crea_cibo();
            }
        }
    }

    function restart() {
        location.reload();
    }

    function crea_cibo() {
        var x = Math.floor((Math.random() * 49) + 1);
        var y = Math.floor((Math.random() * 49) + 1);
        $('.cella[data-x=' + x + '][data-y=' + x + ']').addClass('food');
    }

    function chkDuplicates(arr, justCheck) {
        var len = arr.length, tmp = {}, arrtmp = arr.slice(), dupes = [];
        arrtmp.sort();
        while (len--) {
            var val = arrtmp[len];
            if (/nul|nan|infini/i.test(String(val))) {
                val = String(val);
            }
            if (tmp[JSON.stringify(val)]) {
                if (justCheck) {
                    return true;
                }
                dupes.push(val);
            }
            tmp[JSON.stringify(val)] = true;
        }
        return justCheck ? false : dupes.length ? dupes : null;
    }


})
