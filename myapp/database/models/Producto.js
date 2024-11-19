module.exports = (sequelize, DataTypes) => {
    let alias = "Producto";
    let cols = {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        nombre: {
            type: DataTypes.STRING,
            allowNull: false
        },
        descripcion: {
            type: DataTypes.STRING,
            allowNull: true
        },
        imagen: {
            type: DataTypes.STRING,
            allowNull: true
        },
        usuario_id: {
            type: DataTypes.INTEGER,
            allowNull: false
        }
    };
    let config = {
        tableName: 'productos',
        timestamps: false
    };

    const Producto = sequelize.define(alias,cols,config);
    
    return Producto;
}