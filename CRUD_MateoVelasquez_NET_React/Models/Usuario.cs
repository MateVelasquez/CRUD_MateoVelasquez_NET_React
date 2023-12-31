﻿using System;
using System.Collections.Generic;

namespace CRUD_MateoVelasquez_NET_React.Models;

public partial class Usuario
{
    public int Id { get; set; }

    public string? Nombre { get; set; }

    public string? Email { get; set; }

    public string? Pais { get; set; }

    public string? Ciudad { get; set; }

    public string? Phone { get; set; }

    public string? Direccion { get; set; }

    public string? CodigoPostal { get; set; }
}
