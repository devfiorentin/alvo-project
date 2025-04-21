package fiorentin.dev.alvos.controller;

import fiorentin.dev.alvos.model.Alvos;
import fiorentin.dev.alvos.service.AlvoService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
// rota de acesso
@RequestMapping("/alvos")
public class AlvoController {

    private final AlvoService alvoService;

    public AlvoController(AlvoService alvoService) {
        this.alvoService = alvoService;
    }

    // Lista todos
    @GetMapping
    public List<Alvos> getAll() {return alvoService.getAll();}

    // Cria um novo
    @PostMapping
    public Alvos create(@RequestBody Alvos alvo) {return alvoService.save(alvo);}

    // Edita um alvo existente
    @PutMapping("/{id}") public Alvos edit(@PathVariable Long id, @RequestBody Alvos alvo) {
        alvo.setId(id);
        return alvoService.update(alvo);
    }

    // Deleta por ID
    @DeleteMapping("/{id}")
    public void delete (@PathVariable Long id) {
        alvoService.delete(id);}

}
