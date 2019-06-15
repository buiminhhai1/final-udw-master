function validform() {

        var a = document.forms["my-form"]["full-name"].value;
        var b = document.forms["my-form"]["email-address"].value;
        var c = document.forms["my-form"]["username"].value;
        var d = document.forms["my-form"]["permanent-address"].value;
        var e = document.forms["my-form"]["nid-number"].value;
		var f = document.forms["my-form"]["Password"].value;

        if (a==null || a=="")
        {
            alert("Vui lòng nhập họ tên");
            return false;
        }else if (b==null || b=="")
        {
            alert("Vui lòng nhập địa chỉ Email");
            return false;
        }else if (c==null || c=="")
        {
            alert("Vui lòng nhập tên đăng nhập");
            return false;
        }else if (f==null || f=="")
        {
            alert("Vui lòng nhập mật khẩu");
            return false;
        }else if (d==null || d=="")
        {
            alert("Vui lòng nhập quê quán");
            return false;
        }else if (e==null || e=="")
        {
            alert("Vui lòng nhập CMND");
            return false;
        }

    }