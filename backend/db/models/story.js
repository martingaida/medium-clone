'use strict';
module.exports = (sequelize, DataTypes) => {
  const Story = sequelize.define('Story', {
    userId: {
      allowNull: false,
      type: DataTypes.INTEGER,
      references: {model: 'Users'}
    },
    title: {
      allowNull: false,
      type: DataTypes.STRING(250)
    },
    content: {
      allowNull: false,
      type: DataTypes.TEXT
    }
  }, {});
  Story.associate = function(models) {
    Story.belongsTo(models.User, {
      foreignKey: 'userId'
    })
    Story.hasMany(models.Comment, {
      foreignKey: 'storyId'
    })
    Story.hasMany(models.Like, {
      foreignKey: 'storyId'
    })
  };
  return Story;
};