db.createUser({
    user: 'gabs',
    pwd: '123456',
    roles: [
      {
        role: 'readWrite',
        db: 'batigoDatabase'
      }
    ]
  });
  
  db.jobs.insertMany([
    {
        titulo: 'ART',
        conteudo: 'A ART é o documento que define, para os efeitos legais, os responsáveis técnicos pelo desenvolvimento de atividade técnica no âmbito das profissões abrangidas pelo Sistema Confea/Crea.',
        imagem: "scr/imagem.jpg",
        info: false,
        id: "1"
    },
    {
        titulo: 'Reforma',
        conteudo: 'Qualquer alteração nas condições da edificação com o objetivo de recuperar, melhorar ou ampliar suas condições de habitabilidade, uso ou segurança, e que não seja manutenção. Isso vale mesmo que não aconteça mudança de função, ou seja, que o espaço alterado não passe a ser usado para outro fim.',
        imagem: "src/imagem.jpg",
        info: false,
        id: "2"
    }
  ]);
  