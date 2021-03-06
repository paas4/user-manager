module.exports = (db, DataTypes) => {
    return db.define('users', {
        id: {
            type: DataTypes.INTEGER(10),
            primaryKey: true,
            autoIncrement: true,
        },
        un: DataTypes.STRING(32),
        name: DataTypes.STRING(32),
        stuid: DataTypes.STRING(32),
        username: DataTypes.STRING(32),
        password: DataTypes.STRING(64),
        admin: {
            type: DataTypes.INTEGER(2),
            defaultValue: 0
        },
        status: {
            type: DataTypes.INTEGER(2),
            defaultValue: 0
        },
    },
    {
        freezeTableName: true,
        timestamps: true,
        createdAt: 'created_at',
        updatedAt: 'updated_at',
        deletedAt: false,
        raw: true,
    })
}
