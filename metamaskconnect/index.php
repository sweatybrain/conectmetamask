<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="https://unpkg.com/tailwindcss@^2/dist/tailwind.min.css" rel="stylesheet">  
    <script src="https://cdnjs.cloudflare.com/ajax/libs/web3/1.7.4-rc.1/web3.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0/dist/js/bootstrap.min.js" integrity="sha384-ODmDIVzN+pFdexxHEHFBQH3/9/vQ9uori45z4JjnFsRydbmQbmL5t1tQ0culUzyK" crossorigin="anonymous"></script>
        
    <title>Login Metamask</title>
</head>
<body class="flex w-screen h-screen justify-center items-center">
    <div class="flex-col space-y-2 justify-center items-center">
      <button id='loginButton' onclick="" class="mx-auto rounded-md p-2 bg-green-500 text-white">
        Login com MetaMask 
      </button>
      <p id='userWallet' class='text-lg text-gray-600 my-2'></p>
      <p id='chainId'class='text-lg text-gray-600 my-2'></p>
      <p id="balanceWLT"class='text-lg text-gray-600 my-2'></p>   
      <script src="index.js"></script> 
    </div>

</body>
</html>