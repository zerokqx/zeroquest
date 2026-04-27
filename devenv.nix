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
    openssl
    ngrok
    tmux

    zellij
    stdenv.cc.cc.lib
    jdk21
    gcc

  ];

  languages.javascript = {
    enable = true;
    bun.enable = true;
  };

  env = {
    # OpenSSL для prisma
    PKG_CONFIG_PATH = "${pkgs.openssl.dev}/lib/pkgconfig";
    LD_LIBRARY_PATH = "${pkgs.stdenv.cc.cc.lib}/lib:$LD_LIBRARY_PATH";

    # Prisma engines (фикс для nix)
    PRISMA_SCHEMA_ENGINE_BINARY = "${pkgs.prisma-engines}/bin/schema-engine";
    PRISMA_QUERY_ENGINE_BINARY = "${pkgs.prisma-engines}/bin/query-engine";
    PRISMA_QUERY_ENGINE_LIBRARY = "${pkgs.prisma-engines}/lib/libquery_engine.node";
    PRISMA_FMT_BINARY = "${pkgs.prisma-engines}/bin/prisma-fmt";
  };

  scripts.run-full.exec = "nx run-many -t serve -p api zeroquest";
  scripts.run-full-with-ngrok.exec = "nx run-many -t serve -p api zeroquest && nx ngrok:run api";
scripts.zellij-start-app.exec = ''
  zellij --new-session-with-layout ./layout.kdl --session zeroquest
'';

  enterShell = ''
    hello         # Run scripts directly
    git --version # Use packages
  '';

  enterTest = ''
    echo "Running tests"
    git --version | grep --color=auto "${pkgs.git.version}"
  '';

}
