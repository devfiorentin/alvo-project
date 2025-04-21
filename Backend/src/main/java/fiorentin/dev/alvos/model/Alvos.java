package fiorentin.dev.alvos.model;

import jakarta.persistence.*;
import org.springframework.web.bind.annotation.CrossOrigin;
import java.time.LocalDate;

// entidade no banco de dados
@CrossOrigin(origins = "http://localhost:5173")
@Entity
// nome da tabela
@Table(name = "alvos")
public class Alvos {
    // colunas da tabela
    // gera um id automatico
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String name;
    private String userSocial;
    private LocalDate dateExecute;

    public Alvos(Long id, String name,String userSocial, LocalDate dateExecute) {
        this.id = id;
        this.name = name;
        this.userSocial = userSocial;
        this.dateExecute = dateExecute;

    }
    public Alvos() {
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getUserSocial() {
        return userSocial;
    }

    public void setUserSocial(String userSocial) {
        this.userSocial = userSocial;
    }

    public LocalDate getDateExecute() {
        return dateExecute;
    }

    public void setDateExecute(LocalDate dateExecute) {
        this.dateExecute = dateExecute;
    }
}
