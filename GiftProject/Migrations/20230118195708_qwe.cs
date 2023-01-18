using Microsoft.EntityFrameworkCore.Migrations;
using Npgsql.EntityFrameworkCore.PostgreSQL.Metadata;

#nullable disable

namespace GiftProject.Migrations
{
    /// <inheritdoc />
    public partial class qwe : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "RBoxes",
                columns: table => new
                {
                    id = table.Column<int>(type: "integer", nullable: false)
                        .Annotation("Npgsql:ValueGenerationStrategy", NpgsqlValueGenerationStrategy.IdentityByDefaultColumn),
                    name = table.Column<string>(type: "text", nullable: false),
                    fillersid = table.Column<int>(type: "integer", nullable: false),
                    img = table.Column<string>(type: "text", nullable: false),
                    boxid = table.Column<int>(type: "integer", nullable: false),
                    price = table.Column<int>(type: "integer", nullable: false),
                    onCart = table.Column<bool>(type: "boolean", nullable: false),
                    description = table.Column<string>(type: "text", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_RBoxes", x => x.id);
                    table.ForeignKey(
                        name: "FK_RBoxes_Boxes_boxid",
                        column: x => x.boxid,
                        principalTable: "Boxes",
                        principalColumn: "id",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_RBoxes_Fillers_fillersid",
                        column: x => x.fillersid,
                        principalTable: "Fillers",
                        principalColumn: "id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateIndex(
                name: "IX_RBoxes_boxid",
                table: "RBoxes",
                column: "boxid");

            migrationBuilder.CreateIndex(
                name: "IX_RBoxes_fillersid",
                table: "RBoxes",
                column: "fillersid");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "RBoxes");
        }
    }
}
