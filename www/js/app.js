/********** ID/PW認証 **********/
// 「Sing up」ボタン押下時の処理
function onSignupByIDBtn() {
    var username = $('#singupUsername').val();
    var password = $('#singupPassword').val();
    var passwordConfirm = $('#singupPasswordConfirm').val();
    if(username == '' || password == '' || passwordConfirm == '') {
        ons.notification.alert('入力されていない項目があります');
    } else if (password != passwordConfirm) {
        ons.notification.alert('パスワードが不一致です');
    } else {
        mb.signupByID(username, password);
    }
}

// 「Sing in」ボタン押下時の処理
function onSigninByIDBtn() { 
    var username = $('#singinUsername').val();
    var password = $('#singinPassword').val();
    if(username == '' || password == '') {
        ons.notification.alert('入力されていない項目があります');
    } else {
        mb.signinByID(username, password);
    }
}


/********** メールアドレス / PW 認証 **********/
// 「Sing up」ボタン押下時の処理
function onSignupByEmailBtn() {
    var mailAddress = $('#singupEmailAddress').val();
    if(mailAddress == '') {
        ons.notification.alert('メールアドレスが入力されていません');
    } else {
        mb.signupByEmail(mailAddress);
    }
}

// 「Sing in」ボタン押下時の処理
function onSigninByEmailBtn() {
    var mailAddress = $('#singinEmailAddress').val();
    var password = $('#singinEmailAddressPW').val();
    if(mailAddress == '' || password == '') {
        ons.notification.alert('入力されていない項目があります');
    } else {
        mb.signinByEmail(mailAddress, password);
    }
}

/********** 匿名認証**********/
// 「Sing in」ボタン押下時の処理
function onSigninByAnonymousIDBtn() {
    mb.signinByAnonymousID();
}

/********** コールバック **********/
// 成功
function userSuccess(message, user) {
    /* 処理成功 */
    console.log(message + ' ' + JSON.stringify(user));
    objectId = user.get('objectId');
    ons.notification.alert(message + ' objectId: ' + objectId)
                    .then(function() {
                        mb.logout();
                        ons.notification.alert('ログアウトしました');
                    });
    clearField();
}

// 失敗
function userError(message, error) {
    console.log(message + ' ' + error);
    ons.notification.alert(message + ' ' + error);
}

// クリア
function clearField() {
    $('#singupUsername').val('');
    $('#singupPassword').val('');
    $('#singupPasswordConfirm').val('');
    $('#singinUsername').val('');
    $('#singinPassword').val('');
    $('#singupEmailAddress').val('');
    $('#singinEmailAddress').val('');
    $('#singinEmailAddressPW').val('');
}