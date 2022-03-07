'use strict';
module.exports = (sequelize, DataTypes) => {
  const Like = sequelize.define('Like', {
    userId: {
      allowNull: false,
      type: DataTypes.INTEGER,
      references: {model: 'Users'}
    },
    storyId: {
      allowNull: false,
      type: DataTypes.INTEGER,
      references: {model: 'Stories'}
    },
  }, {});
  Like.associate = function(models) {
    Like.belongsTo(models.User, {
      foreignKey: 'userId'
    })
    Like.belongsTo(models.Story, {
      foreignKey: 'storyId'
    })
  };
  return Like;
};