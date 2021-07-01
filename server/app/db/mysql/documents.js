module.exports = (db, DataTypes) => {
    return db.define('documents', {
        id: {
            type: DataTypes.INTEGER(10),
            primaryKey: true,
            autoIncrement: true,
        },
        uid: DataTypes.INTEGER(10),
        uuid: DataTypes.STRING(32),
        ext: DataTypes.STRING(16),
        path: DataTypes.STRING(255),
        name: DataTypes.STRING(64),
        description: DataTypes.STRING(512),
        score: {
            type: DataTypes.INTEGER(10),
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
