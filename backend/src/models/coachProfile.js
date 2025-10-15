const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');
const User = require('./user');

const CoachProfile = sequelize.define('CoachProfile', {
  id: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    primaryKey: true,
  },
  bio: DataTypes.TEXT,
  specialties: DataTypes.STRING,
  hourlyRate: DataTypes.FLOAT,
  experienceYears: DataTypes.INTEGER,
});

CoachProfile.belongsTo(User, { foreignKey: 'userId', onDelete: 'CASCADE' });
User.hasOne(CoachProfile, { foreignKey: 'userId' });

module.exports = CoachProfile;
