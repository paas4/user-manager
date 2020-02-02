module.exports = (db, DataTypes) => {
    return db.define(
        'users',
        {
            id: {
                type: DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true,
            },
            uid: {
                type: DataTypes.STRING,
                unique: true
            },
            openid: {
                type: DataTypes.STRING,
                unique: true
            },
            avatar: DataTypes.TEXT,
            nickname: DataTypes.STRING,
            status: {
                type: DataTypes.INTEGER,
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
