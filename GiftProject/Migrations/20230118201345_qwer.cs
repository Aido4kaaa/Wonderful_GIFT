using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace GiftProject.Migrations
{
    /// <inheritdoc />
    public partial class qwer : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_RBoxes_Fillers_fillersid",
                table: "RBoxes");

            migrationBuilder.DropIndex(
                name: "IX_RBoxes_fillersid",
                table: "RBoxes");

            migrationBuilder.DropColumn(
                name: "fillersid",
                table: "RBoxes");

            migrationBuilder.AddColumn<int>(
                name: "RBoxid",
                table: "Fillers",
                type: "integer",
                nullable: true);

            migrationBuilder.CreateIndex(
                name: "IX_Fillers_RBoxid",
                table: "Fillers",
                column: "RBoxid");

            migrationBuilder.AddForeignKey(
                name: "FK_Fillers_RBoxes_RBoxid",
                table: "Fillers",
                column: "RBoxid",
                principalTable: "RBoxes",
                principalColumn: "id");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Fillers_RBoxes_RBoxid",
                table: "Fillers");

            migrationBuilder.DropIndex(
                name: "IX_Fillers_RBoxid",
                table: "Fillers");

            migrationBuilder.DropColumn(
                name: "RBoxid",
                table: "Fillers");

            migrationBuilder.AddColumn<int>(
                name: "fillersid",
                table: "RBoxes",
                type: "integer",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.CreateIndex(
                name: "IX_RBoxes_fillersid",
                table: "RBoxes",
                column: "fillersid");

            migrationBuilder.AddForeignKey(
                name: "FK_RBoxes_Fillers_fillersid",
                table: "RBoxes",
                column: "fillersid",
                principalTable: "Fillers",
                principalColumn: "id",
                onDelete: ReferentialAction.Cascade);
        }
    }
}
