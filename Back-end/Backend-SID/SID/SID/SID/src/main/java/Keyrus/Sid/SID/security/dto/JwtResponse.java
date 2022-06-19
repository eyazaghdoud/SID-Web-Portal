package Keyrus.Sid.SID.security.dto;

import java.io.Serializable;

import Keyrus.Sid.SID.dto.LoginResponse;

public class JwtResponse implements Serializable {

    private static final long serialVersionUID = -8091879091924046844L;
    private final String jwttoken;
    private LoginResponse userInfo;
    
    
    public JwtResponse(String jwttoken) {
        this.jwttoken = jwttoken;
    }
    
   
	public JwtResponse(String jwttoken, LoginResponse userInfo) {
		super();
		this.jwttoken = jwttoken;
		this.userInfo = userInfo;
	}


	public String getJwttoken() {
		return jwttoken;
	}


	public LoginResponse getUserInfo() {
		return userInfo;
	}


    
}
