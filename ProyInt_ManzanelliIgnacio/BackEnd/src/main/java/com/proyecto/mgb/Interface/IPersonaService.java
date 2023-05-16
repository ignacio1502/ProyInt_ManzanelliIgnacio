package com.proyecto.mgb.Interface;

import com.proyecto.mgb.Entity.Persona;
import java.util.List;

/**
 *
 * @author Mr. Ignacio
 */
public interface IPersonaService {
    //traer una lista de persona
    public List<Persona> getPersona();

    //guardar un objeto de tipo persona
    public void savePersona(Persona persona);

    //eliminar un objeto pweo lo buscamos por id
    public void deletePersona(Long id);
    //buscar una persona por id
    public Persona findPersona(Long id);  
}
