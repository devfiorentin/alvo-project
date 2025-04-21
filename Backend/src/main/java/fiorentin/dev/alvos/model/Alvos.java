package fiorentin.dev.alvos.model;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.springframework.web.bind.annotation.CrossOrigin;
import java.time.LocalDate;


@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor

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


}
