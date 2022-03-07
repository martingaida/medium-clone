'use strict';
module.exports = (sequelize, DataTypes) => {
  const Comment = sequelize.define('Comment', {
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
    content: {
      allowNull: false,
      type: DataTypes.STRING(250)
    }
  }, {});
  Comment.associate = function(models) {
    Comment.belongsTo(models.Story, {
      foreignKey: 'storyId'
    })
    Comment.belongsTo(models.User, {
      foreignKey: 'userId'
    })
  };
  return Comment;
};