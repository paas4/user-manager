module.exports = (db, DataTypes) => {
    return db.define(
        'users',
        {
            id: {
                type: DataTypes.INTEGER(10),
                primaryKey: true,
                autoIncrement: true,
            },
            uid: {
                type: DataTypes.STRING(32),
                unique: true
            },
            username: DataTypes.STRING(32),
            password: DataTypes.STRING(64),
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
        }
    )
}
