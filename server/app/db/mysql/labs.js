module.exports = (db, DataTypes) => {
    return db.define('labs', {
        id: {
            type: DataTypes.INTEGER(10),
            primaryKey: true,
            autoIncrement: true,
        },
        uid: DataTypes.INTEGER(10),

        sid: DataTypes.STRING(32),
        title: DataTypes.STRING(32),
        score: DataTypes.INTEGER(10),

        startTime: DataTypes.STRING(16),
        endTime: DataTypes.STRING(16),

        description: DataTypes.STRING(255),
        report: DataTypes.TEXT,
        status: {
            type: DataTypes.INTEGER(2),
            defaultValue: 1
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
