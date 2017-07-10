<html>
    <head>
        <title>Snake</title>
        <link rel="stylesheet" href="css/style.css">
    </head>
    <body>
        

        <div class="container">
            
            <div>
                <h1>
                    Snake
                </h1>
            </div>

            <div class="row">
                
                <div class="campo">
                    <?php for ($y = 50; $y >= 1; $y--): ?>
                        <?php for ($x = 1; $x <= 50; $x++): ?>
                            <div class="cella" data-x="<?= $x ?>" data-y="<?= $y ?>"></div>
                        <?php endfor; ?>
                    <?php endfor; ?>
                </div>

                <div class="image">

                </div>
            
            </div>
        </div>
        
        <div class="footer">
            
        </div>
        
        
        
        
        <div class="game_pause">
            <div>
            </div>
        </div>
        
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
        <script src="js/main.js"></script>
    
    </body>

</html>