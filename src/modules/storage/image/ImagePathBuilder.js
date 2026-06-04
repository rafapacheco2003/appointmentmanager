
class ImagePathBuilder {
    constructor() {
        this.parts = [];
    }
    
    // Entidades principales
    organization(organizationId) {
        this.parts.push('organizations', organizationId);
        return this;
    }
    
    branch(branchId) {
        this.parts.push('branches', branchId);
        return this;
    }
    
    employee(employeeId) {
        this.parts.push('employees', employeeId);
        return this;
    }
    
    service(serviceId) {
        this.parts.push('services', serviceId);
        return this;
    }
    
    // Tipos de archivo
    logo() {
        this.parts.push('logo');
        return this;
    }
    
    icon() {
        this.parts.push('icon');
        return this;
    }
    
    banner() {
        this.parts.push('banner');
        return this;
    }
    
    avatar() {
        this.parts.push('avatar');
        return this;
    }
    
    portfolio() {
        this.parts.push('portfolio');
        return this;
    }
    
    mainImage() {
        this.parts.push('main');
        return this;
    }
    
    gallery() {
        this.parts.push('gallery');
        return this;
    }
    
    photos() {
        this.parts.push('photos');
        return this;
    }
    
    // Método genérico para tipos personalizados
    customType(type) {
        this.parts.push(type);
        return this;
    }
    
    build() {
        return this.parts.join('/');
    }
    
    reset() {
        this.parts = [];
        return this;
    }
    
    // Método estático para crear nueva instancia
    static create() {
        return new ImagePathBuilder();
    }
}

module.exports = ImagePathBuilder;