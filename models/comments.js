const { Model } = require('sequelize')

module.exports = (sequelize, DataTypes) => {
  class Comments extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate (models) {
      Comments.belongsTo(models.Users, {
        as: 'users',
        foreignKey: 'user_id',
        onDelete: 'cascade',
        onUpdate: 'cascade'
      })
      Comments.belongsTo(models.News, {
        as: 'news',
        foreignKey: 'novelty_id'
      })
    }
  }
  Comments.init(
    {
      user_id: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      novelty_id: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      body: {
        type: DataTypes.STRING,
        allowNull: false
      }
    },
    {
      sequelize,
      modelName: 'Comments',
      deletedAt: 'deletedAt',
      paranoid: true,
      timestamps: true
    }
  )
  return Comments
}
