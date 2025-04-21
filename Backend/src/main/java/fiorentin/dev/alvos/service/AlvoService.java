package fiorentin.dev.alvos.service;

import fiorentin.dev.alvos.model.Alvos;
import fiorentin.dev.alvos.repository.AlvoRepository;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class AlvoService {

    private final AlvoRepository foodRepository;

    public AlvoService(AlvoRepository foodRepository) {
        this.foodRepository = foodRepository;
    }

    // LISTAR
    public List<Alvos> getAll() { return foodRepository.findAll();}
    // CRIAR
    public Alvos save(Alvos alvo) {return (Alvos) foodRepository.save(alvo);}
    // DELETAR
    public void delete(Long id) {foodRepository.deleteById(id);}
    // ATUALIZAR
    public Alvos update(Alvos alvo) {Optional<Alvos> existingAlvo = foodRepository.findById(alvo.getId());
        if (existingAlvo.isPresent()) {return foodRepository.save(alvo);}
        else {throw new RuntimeException("Alvo com ID " + alvo.getId() + " não encontrado.");}
}
}
