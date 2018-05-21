
var user_email='admin@163.com';
var user_password='666666';

//去本地的数据进行校验

function checkLogin() {
//    获取文本框数据
    var email=$('#txtEmail').val();
    var password=$('#txtPassword').val();
    if(email == user_email && password == user_password){
        //{"userId":email}
        sessionStorage.setItem('userId',email);
        return true;
    }else {
        // alert('用户名或者密码错误');

        // $('.div-alert').show(1000);
        $('.div-alert').fadeIn(1000).fadeOut(4000);
        return false;
    }
}
function checkUser() {
    var email=$('#txtEmail').val();

    if(email.length==0){
        // alert('用户名不能为空');
        $('.nempty').fadeIn(1000).fadeOut(2000);
        return false;
    }else {
        if(email.indexOf('@')==-1){
            $('.nillegal').fadeIn(1000).fadeOut(2000);
            return false;
        }else {
            return true;
        }
    }
}
function checkPassword() {
    var password=$('#txtPassword').val();
    if(password.length==0){
        $('.pempty').fadeIn(1000).fadeOut(2000);
        return false;
    }else{
        if(password.length<6 && password.length>1){
            $('.pillegal').fadeIn(1000).fadeOut(2000);
            return false;
        }else{
            return true;
        }
    }
}



$('#btnLogin2').click(function () {
    if(checkUser()&& checkPassword()){
        var email=$('#txtEmail').val();
        var password=$('#txtPassword').val();

        var user={"userId":email,"userPassword":password};

        $.ajax(
            {
                url:'../datas/users.json',
                type:'get',
                dataType:'json',
                data:user,
                success:function (response) {
                    var uu;
                    for(var i=0;i<response.length;i++){
                        if(response[i].userId==email){
                            uu=response[i];
                        }
                    }

                    if(uu){
                        if(uu.userPassword==password){
                            sessionStorage.setItem('userId',email);
                            sessionStorage.setItem('nickName',uu.nickName);
                            location.href='../index.html'
                        }else {
                            // alert('用户名或密码错误');
                             $('.wrong-input').fadeIn(1000).fadeOut(2000);
                        }
                    }else {

                        // alert('用户不存在');
                        $('.notFound').fadeIn(1000).fadeOut(2000);

                    }

                },
                error:function (err) {
                    console.log(err);
                }
            }
        )
    }

});

$('#btnLogin').click(function () {
    if(checkUser()&& checkPassword()){
        var email=$('#txtEmail').val();
        var password=$('#txtPassword').val();

        var user={"userId":email,"userPassword":password};

        $.ajax(
            {
                url:'../datas/users.json',
                type:'get',
                dataType:'json',
                data:user,
                success:function (response) {
                    var uu;
                    for(var i=0;i<response.length;i++){
                        if(response[i].userId==email){
                            uu=response[i];
                        }
                    }

                    if(uu){
                        if(uu.userPassword==password){
                            sessionStorage.setItem('userId',email);
                            sessionStorage.setItem('nickName',uu.nickName);
                            location.href='../index.html'
                        }else {
                            // alert('用户名或密码错误');
                            $('.wrong-input').fadeIn(1000).fadeOut(2000);
                        }
                    }else {

                        // alert('用户不存在');
                        $('.notFound').fadeIn(1000).fadeOut(2000);

                    }

                },
                error:function (err) {
                    console.log(err);
                }
            }
        )
    }

});