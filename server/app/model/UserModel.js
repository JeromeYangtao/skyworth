module.exports = app => {
  const {INTEGER, STRING, DATE, UUID, UUIDV4} = app.Sequelize

  const UserModel = app.model.define('user', {
    id: {
      type: UUID,
      defaultValue: UUIDV4,
      allowNull: false,
      primaryKey: true,
      // autoIncrement: true,
    },
    username: {
      type: STRING(50),
      allowNull: false,
      unique: true,
    },
    password: {
      type: STRING(50),
      allowNull: false,
    },
    created_at: {
      type: DATE,
      allowNull: false,
      defaultValue: new Date(),
    },
    updated_at: {
      type: DATE,
      allowNull: false,
      defaultValue: new Date(),
    },
  })

  return UserModel
}
