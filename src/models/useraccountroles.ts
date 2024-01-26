module.exports = (sequelize: any, Sequelize: any) => {
    return sequelize.define(
      "useraccountroles",
      {
        createdAt: {
          type: Sequelize.DATE,
        },
        updatedAt: {
          type: Sequelize.DATE,
        },
      },
      {
        timestamps: true,
      }
    );
  };
  