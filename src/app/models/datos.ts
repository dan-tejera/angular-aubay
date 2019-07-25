import { ICurso, ITurno } from './alumno.model';

export const TURNOS: Array<ITurno> = [
    {id: 'M', name: 'Mañana', description: 'Desde las 9:00'},
    {id: 'T', name: 'Tarde', description: 'Desde las 16:00'},
    {id: 'N', name: 'Noche', description: 'Desde las 19:00'}
]

export const CURSOS: Array<ICurso> = [
    {id: '001A', name: 'Angular', description: 'Framework Angular'},
    {id: '002R', name: 'React', description: 'Librería React'},
    {id: '003V', name: 'Vue', description: 'Nuevo Framework Vue'}
]



