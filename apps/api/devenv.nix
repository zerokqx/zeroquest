{
  pkgs,
  lib,
  config,
  inputs,
  ...
}:

{
  # https://devenv.sh/basics/
  env.GREET = "devenv";

  # https://devenv.sh/packages/
  packages = with pkgs; [
    git
    prisma-engines
    prisma
  ];

  languages.javascript = {
    enable = true;
    bun.enable = true;
  };

  env = {
    # OpenSSL для prisma
    PKG_CONFIG_PATH = "${pkgs.openssl.dev}/lib/pkgconfig";

    # Prisma engines (фикс для nix)
    PRISMA_SCHEMA_ENGINE_BINARY = "${pkgs.prisma-engines}/bin/schema-engine";
    PRISMA_QUERY_ENGINE_BINARY = "${pkgs.prisma-engines}/bin/query-engine";
    PRISMA_QUERY_ENGINE_LIBRARY = "${pkgs.prisma-engines}/lib/libquery_engine.node";
    PRISMA_FMT_BINARY = "${pkgs.prisma-engines}/bin/prisma-fmt";
  };

  enterShell = ''
    hello         # Run scripts directly
    git --version # Use packages
  '';

  enterTest = ''
    echo "Running tests"
    git --version | grep --color=auto "${pkgs.git.version}"
  '';

}
