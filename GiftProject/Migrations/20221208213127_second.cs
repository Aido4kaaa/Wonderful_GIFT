using Microsoft.EntityFrameworkCore.Migrations;
using Npgsql.EntityFrameworkCore.PostgreSQL.Metadata;

#nullable disable

namespace GiftProject.Migrations
{
    /// <inheritdoc />
    public partial class second : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<int>(
                name: "FilledBoxid",
                table: "Fillers",
                type: "integer",
                nullable: true);

            migrationBuilder.AddColumn<int>(
                name: "Boxid",
                table: "Descriptions",
                type: "integer",
                nullable: true);

            migrationBuilder.AddColumn<int>(
                name: "volumeid",
                table: "Boxes",
                type: "integer",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.CreateTable(
                name: "Carts",
                columns: table => new
                {
                    id = table.Column<int>(type: "integer", nullable: false)
                        .Annotation("Npgsql:ValueGenerationStrategy", NpgsqlValueGenerationStrategy.IdentityByDefaultColumn)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Carts", x => x.id);
                });

            migrationBuilder.CreateTable(
                name: "Volumes",
                columns: table => new
                {
                    id = table.Column<int>(type: "integer", nullable: false)
                        .Annotation("Npgsql:ValueGenerationStrategy", NpgsqlValueGenerationStrategy.IdentityByDefaultColumn),
                    height = table.Column<int>(type: "integer", nullable: false),
                    weight = table.Column<int>(type: "integer", nullable: false),
                    length = table.Column<int>(type: "integer", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Volumes", x => x.id);
                });

            migrationBuilder.CreateTable(
                name: "FilledBoxes",
                columns: table => new
                {
                    id = table.Column<int>(type: "integer", nullable: false)
                        .Annotation("Npgsql:ValueGenerationStrategy", NpgsqlValueGenerationStrategy.IdentityByDefaultColumn),
                    boxid = table.Column<int>(type: "integer", nullable: false),
                    Cartid = table.Column<int>(type: "integer", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_FilledBoxes", x => x.id);
                    table.ForeignKey(
                        name: "FK_FilledBoxes_Boxes_boxid",
                        column: x => x.boxid,
                        principalTable: "Boxes",
                        principalColumn: "id",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_FilledBoxes_Carts_Cartid",
                        column: x => x.Cartid,
                        principalTable: "Carts",
                        principalColumn: "id");
                });

            migrationBuilder.CreateIndex(
                name: "IX_Fillers_FilledBoxid",
                table: "Fillers",
                column: "FilledBoxid");

            migrationBuilder.CreateIndex(
                name: "IX_Descriptions_Boxid",
                table: "Descriptions",
                column: "Boxid");

            migrationBuilder.CreateIndex(
                name: "IX_Boxes_volumeid",
                table: "Boxes",
                column: "volumeid");

            migrationBuilder.CreateIndex(
                name: "IX_FilledBoxes_boxid",
                table: "FilledBoxes",
                column: "boxid");

            migrationBuilder.CreateIndex(
                name: "IX_FilledBoxes_Cartid",
                table: "FilledBoxes",
                column: "Cartid");

            migrationBuilder.AddForeignKey(
                name: "FK_Boxes_Volumes_volumeid",
                table: "Boxes",
                column: "volumeid",
                principalTable: "Volumes",
                principalColumn: "id",
                onDelete: ReferentialAction.Cascade);

            migrationBuilder.AddForeignKey(
                name: "FK_Descriptions_Boxes_Boxid",
                table: "Descriptions",
                column: "Boxid",
                principalTable: "Boxes",
                principalColumn: "id");

            migrationBuilder.AddForeignKey(
                name: "FK_Fillers_FilledBoxes_FilledBoxid",
                table: "Fillers",
                column: "FilledBoxid",
                principalTable: "FilledBoxes",
                principalColumn: "id");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Boxes_Volumes_volumeid",
                table: "Boxes");

            migrationBuilder.DropForeignKey(
                name: "FK_Descriptions_Boxes_Boxid",
                table: "Descriptions");

            migrationBuilder.DropForeignKey(
                name: "FK_Fillers_FilledBoxes_FilledBoxid",
                table: "Fillers");

            migrationBuilder.DropTable(
                name: "FilledBoxes");

            migrationBuilder.DropTable(
                name: "Volumes");

            migrationBuilder.DropTable(
                name: "Carts");

            migrationBuilder.DropIndex(
                name: "IX_Fillers_FilledBoxid",
                table: "Fillers");

            migrationBuilder.DropIndex(
                name: "IX_Descriptions_Boxid",
                table: "Descriptions");

            migrationBuilder.DropIndex(
                name: "IX_Boxes_volumeid",
                table: "Boxes");

            migrationBuilder.DropColumn(
                name: "FilledBoxid",
                table: "Fillers");

            migrationBuilder.DropColumn(
                name: "Boxid",
                table: "Descriptions");

            migrationBuilder.DropColumn(
                name: "volumeid",
                table: "Boxes");
        }
    }
}
