package Keyrus.Sid.SID.dto;

public class AddUserResponse {

    private String message;

    public AddUserResponse(String message) {
        this.message = message;
    }

    public void setMessage(String message) {
        this.message = message;
    }

    public String getMessage() {
        return message;
    }
}
