export interface Empleado {
    codigoEmpleado: number;
    nombre: string;
    apellidoPaterno: string;
    apellidoMaterno: string;
    fechaNacimiento: string; // ISO string para compatibilidad con Angular y API
    fechaInicioContrato: string;
    idPuesto: number;
    puesto?: string; // Este viene solo cuando consultamos (JOIN con Puestos)
}