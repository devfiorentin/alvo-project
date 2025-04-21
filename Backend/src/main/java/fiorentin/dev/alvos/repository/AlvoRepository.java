package fiorentin.dev.alvos.repository;

import fiorentin.dev.alvos.model.Alvos;
import org.springframework.data.jpa.repository.JpaRepository;

public interface AlvoRepository extends JpaRepository<Alvos, Long> {
}
