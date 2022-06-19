package Keyrus.Sid.SID.dto;


public class AddUserRequest {

	 String userName;
     String password;
     String role;
     String tenant;
     String auhtenticationKey;
     String libelle;
     
     public AddUserRequest() {
		// TODO Auto-generated constructor stub
	}

	public AddUserRequest(String userName, String password, String role, String tenant, String auhtenticationKey,
			String libelle) {
	
		this.userName = userName;
		this.password = password;
		this.role = role;
		this.tenant = tenant;
		this.auhtenticationKey = auhtenticationKey;
		if(role.equals("admin")) {
			this.libelle = "All";
		}
		else {
			this.libelle = libelle;
		}
		
	}

	public String getUserName() {
		return userName;
	}

	public void setUserName(String userName) {
		this.userName = userName;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	public String getRole() {
		return role;
	}

	public void setRole(String role) {
		this.role = role;
	}

	public String getTenant() {
		return tenant;
	}

	public void setTenant(String tenant) {
		this.tenant = tenant;
	}

	public String getAuhtenticationKey() {
		return auhtenticationKey;
	}

	public void setAuhtenticationKey(String auhtenticationKey) {
		this.auhtenticationKey = auhtenticationKey;
	}

	public String getLibelle() {
		return libelle;
	}

	public void setLibelle(String libelle) {
		this.libelle = libelle;
	}
     
}
