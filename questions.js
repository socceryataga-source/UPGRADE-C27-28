const QUESTION_SETS = [
  {
    "id": "upgrade-17",
    "label": "第17回 ①＋③",
    "title": "文をつなぐ語句・重要語いの整理",
    "range": "UPGRADE 27・28",
    "questions": [
      {
        "id": 1,
        "sourceSet": "①",
        "sourceNo": 4,
        "text": "In English, there is only one word for snow. In Eskimo languages, （　）, there are as many as thirty-two different words for snow.",
        "choices": [
          "but",
          "however",
          "therefore",
          "yet"
        ],
        "answer": 1,
        "translation": "英語では雪を表す語は1語しかない。しかし、エスキモー諸語では雪を表す異なる語が32語もある。",
        "tip": "however = 「しかしながら」。文中に挿入する場合は前後をコンマで区切る。"
      },
      {
        "id": 2,
        "sourceSet": "①",
        "sourceNo": 5,
        "text": "The tennis player was injured in the semifinal match. （　） he won the final and took the championship.",
        "choices": [
          "Even though",
          "In spite of",
          "Instead of",
          "Nevertheless"
        ],
        "answer": 3,
        "translation": "そのテニス選手は準決勝でけがをした。それにもかかわらず、決勝で勝って優勝した。",
        "tip": "nevertheless = 「それにもかかわらず」。前文を受けて逆接を表す副詞。"
      },
      {
        "id": 3,
        "sourceSet": "①",
        "sourceNo": 6,
        "text": "I didn't say I liked her; （　）, I said I didn't like her.",
        "choices": [
          "at any rate",
          "in contrast",
          "of course",
          "on the contrary"
        ],
        "answer": 3,
        "translation": "私は彼女が好きだとは言っていない。それどころか、嫌いだと言ったのだ。",
        "tip": "on the contrary = 「それどころか／反対に」。直前の内容を否定して逆を述べる。"
      },
      {
        "id": 4,
        "sourceSet": "①",
        "sourceNo": 7,
        "text": "She's far from being well-educated, （　）, but she's well-mannered.",
        "choices": [
          "nevertheless",
          "however",
          "to be sure",
          "none the less"
        ],
        "answer": 2,
        "translation": "確かに彼女は教養があるとはとても言えないが、礼儀正しい。",
        "tip": "to be sure = 「確かに」。一度認めた上で but 以下につなげる。"
      },
      {
        "id": 5,
        "sourceSet": "①",
        "sourceNo": 8,
        "text": "Not everyone, （　）, is entirely comfortable with this new usage.",
        "choices": [
          "but",
          "though",
          "whenever",
          "while"
        ],
        "answer": 1,
        "translation": "とはいえ、誰もがこの新しい用法に完全に違和感がないわけではない。",
        "tip": "though は文中・文末で「もっとも／とはいえ」と副詞的に使える。"
      },
      {
        "id": 6,
        "sourceSet": "①",
        "sourceNo": 9,
        "text": "The job wasn't very interesting, but （　） it was well-paid.",
        "choices": [
          "on the contrary",
          "on the other hand",
          "in addition",
          "all the more"
        ],
        "answer": 1,
        "translation": "その仕事はあまり面白くなかったが、その一方で給料はよかった。",
        "tip": "on the other hand = 「その一方で」。二つの側面を対比する。"
      },
      {
        "id": 7,
        "sourceSet": "①",
        "sourceNo": 10,
        "text": "Penny is by no means poor; （　）, she's quite rich.",
        "choices": [
          "by all means",
          "in fact",
          "in addition",
          "by the way"
        ],
        "answer": 1,
        "translation": "ペニーは決して貧しくない。実際、かなり裕福だ。",
        "tip": "in fact = 「実際には／実は」。by no means = 「決して〜ない」。"
      },
      {
        "id": 8,
        "sourceSet": "①",
        "sourceNo": 11,
        "text": "A: Hi, Mary, have you got any plans for the weekend?\nB: No, Tom. （　）, I have nothing to do this weekend. What are you going to do?",
        "choices": [
          "As a matter of fact",
          "To make matters worse",
          "Generally speaking",
          "I hope not"
        ],
        "answer": 0,
        "translation": "A：メアリー、週末の予定はある？\nB：ないよ。実を言うと、今週末は何もすることがないの。あなたはどうするの？",
        "tip": "as a matter of fact = 「実を言うと／実際のところ」。"
      },
      {
        "id": 9,
        "sourceSet": "①",
        "sourceNo": 12,
        "text": "Joseph stayed up late last night. （　）, he fell asleep during the mathematics class.",
        "choices": [
          "However",
          "As a result",
          "Instead",
          "In addition"
        ],
        "answer": 1,
        "translation": "ジョセフは昨夜遅くまで起きていた。その結果、数学の授業中に眠ってしまった。",
        "tip": "as a result = 「その結果」。原因→結果のつながりを示す。"
      },
      {
        "id": 10,
        "sourceSet": "①",
        "sourceNo": 13,
        "text": "It's too late to go out now; （　）, it's starting to rain.",
        "choices": [
          "all the same",
          "at least",
          "besides",
          "therefore"
        ],
        "answer": 2,
        "translation": "今から出かけるには遅すぎる。そのうえ、雨も降り始めている。",
        "tip": "besides = 「そのうえ／さらに」。理由や情報を追加する。"
      },
      {
        "id": 11,
        "sourceSet": "①",
        "sourceNo": 14,
        "text": "English students must study grammar; （　）, they must study reading, writing, and listening comprehension.",
        "choices": [
          "nonetheless",
          "in fact",
          "however",
          "in addition"
        ],
        "answer": 3,
        "translation": "英語を学ぶ学生は文法を勉強しなければならない。さらに、読解・作文・聴解も学ばなければならない。",
        "tip": "in addition = 「さらに／加えて」。同方向の情報を追加する。"
      },
      {
        "id": 12,
        "sourceSet": "①",
        "sourceNo": 15,
        "text": "My family is financially sound; （　）, we are debt free.",
        "choices": [
          "on the other hand",
          "for example",
          "for all that",
          "nevertheless"
        ],
        "answer": 1,
        "translation": "私の家族の家計は健全だ。例えば、借金はまったくない。",
        "tip": "for example = 「例えば」。前文の内容を具体例で説明する。"
      },
      {
        "id": 13,
        "sourceSet": "①",
        "sourceNo": 16,
        "text": "Michael refused; （　）, his answer was \"no.\"",
        "choices": [
          "in other words",
          "otherwise",
          "words for words",
          "however"
        ],
        "answer": 0,
        "translation": "マイケルは断った。言い換えれば、彼の答えは「ノー」だった。",
        "tip": "in other words = 「言い換えれば」。同じ内容を別表現で説明する。"
      },
      {
        "id": 14,
        "sourceSet": "①",
        "sourceNo": 17,
        "text": "The tennis courts were closed, so we went bowling （　）.",
        "choices": [
          "either",
          "instead",
          "neither",
          "rather"
        ],
        "answer": 1,
        "translation": "テニスコートが閉まっていたので、代わりにボウリングへ行った。",
        "tip": "instead = 「代わりに」。instead of + 名詞/-ing も重要。"
      },
      {
        "id": 15,
        "sourceSet": "①",
        "sourceNo": 18,
        "text": "I forgot to stop at the store on the way home and buy food for dinner. （　）, I decided to eat out tonight.",
        "choices": [
          "In addition",
          "In fact",
          "Nevertheless",
          "Specifically",
          "Therefore"
        ],
        "answer": 4,
        "translation": "帰宅途中に店に寄って夕食の食材を買うのを忘れた。そこで、今夜は外食することにした。",
        "tip": "therefore = 「したがって」。原因から論理的な結果を導く。"
      },
      {
        "id": 16,
        "sourceSet": "①",
        "sourceNo": 19,
        "text": "I （　） you that the wedding will take place as planned.",
        "choices": [
          "assure",
          "insure",
          "admire",
          "inspire"
        ],
        "answer": 0,
        "translation": "結婚式は予定どおり行われるとあなたに保証します。",
        "tip": "assure + 人 + that ... = 「人に〜だと保証する」。"
      },
      {
        "id": 17,
        "sourceSet": "①",
        "sourceNo": 20,
        "text": "We are having our annual yard sale. So come and spend a wonderful day shopping for books, clothes, and furniture （　） beds and tables.",
        "choices": [
          "sleeping",
          "making",
          "adding",
          "including"
        ],
        "answer": 3,
        "translation": "恒例のヤードセールを開きます。ぜひ来て、本や服、ベッドやテーブルを含む家具の買い物を楽しんでください。",
        "tip": "including = 「〜を含めて」。具体例を追加する前置詞。"
      },
      {
        "id": 18,
        "sourceSet": "①",
        "sourceNo": 21,
        "text": "John shows no interest in international problems at all. I don't know how he can be so （　） to suffering in other countries.",
        "choices": [
          "indifferent",
          "sensitive",
          "sympathetic",
          "inheritable"
        ],
        "answer": 0,
        "translation": "ジョンは国際問題にまったく関心を示さない。どうして他国の人々の苦しみにそれほど無関心でいられるのか分からない。",
        "tip": "be indifferent to A = 「Aに無関心である」。"
      },
      {
        "id": 19,
        "sourceSet": "①",
        "sourceNo": 22,
        "text": "I have tried to （　） Nancy from going abroad. She is too young.",
        "choices": [
          "encourage",
          "discourage",
          "convince",
          "persuade"
        ],
        "answer": 1,
        "translation": "私はナンシーが海外へ行くのを思いとどまらせようとしてきた。彼女は若すぎる。",
        "tip": "discourage A from -ing = 「Aが〜するのを思いとどまらせる」。"
      },
      {
        "id": 20,
        "sourceSet": "①",
        "sourceNo": 23,
        "text": "Jane has been working very hard, so I think she （　） a long vacation.",
        "choices": [
          "conserves",
          "deserves",
          "reserves",
          "preserves"
        ],
        "answer": 1,
        "translation": "ジェーンはずっと一生懸命働いているので、長い休暇を取るに値すると思う。",
        "tip": "deserve + 名詞 = 「〜に値する」。deserve to V も頻出。"
      },
      {
        "id": 21,
        "sourceSet": "③",
        "sourceNo": 4,
        "text": "Jim's Japanese was not very good, （　） his speech still impressed the audience.",
        "choices": [
          "because",
          "but",
          "so",
          "therefore"
        ],
        "answer": 1,
        "translation": "ジムの日本語はあまり上手ではなかったが、それでも彼のスピーチは聴衆に感銘を与えた。",
        "tip": "but = 「しかし」。等位接続詞なので文と文を直接つなぐ。"
      },
      {
        "id": 22,
        "sourceSet": "③",
        "sourceNo": 5,
        "text": "In English, there is only one word for snow. In Eskimo languages, （　）, there are as many as thirty-two different words for snow.",
        "choices": [
          "but",
          "however",
          "therefore",
          "yet"
        ],
        "answer": 1,
        "translation": "英語では雪を表す語は1語しかない。しかし、エスキモー諸語では雪を表す異なる語が32語もある。",
        "tip": "however は接続副詞。but と違い、コンマなどで区切って使う。"
      },
      {
        "id": 23,
        "sourceSet": "③",
        "sourceNo": 6,
        "text": "The tennis player was injured in the semifinal match. （　） he won the final and took the championship.",
        "choices": [
          "Even though",
          "In spite of",
          "Instead of",
          "Nevertheless"
        ],
        "answer": 3,
        "translation": "そのテニス選手は準決勝でけがをした。それにもかかわらず、決勝で勝って優勝した。",
        "tip": "nevertheless = 「それにもかかわらず」。逆接の接続副詞。"
      },
      {
        "id": 24,
        "sourceSet": "③",
        "sourceNo": 7,
        "text": "I didn't say I liked her; （　）, I said I didn't like her.",
        "choices": [
          "at any rate",
          "in contrast",
          "of course",
          "on the contrary"
        ],
        "answer": 3,
        "translation": "私は彼女が好きだとは言っていない。それどころか、嫌いだと言ったのだ。",
        "tip": "on the contrary = 「それどころか」。前の内容を否定し逆を述べる。"
      },
      {
        "id": 25,
        "sourceSet": "③",
        "sourceNo": 8,
        "text": "She's far from being well-educated, （　）, but she's well-mannered.",
        "choices": [
          "nevertheless",
          "however",
          "to be sure",
          "none the less"
        ],
        "answer": 2,
        "translation": "確かに彼女は教養があるとはとても言えないが、礼儀正しい。",
        "tip": "to be sure = 「確かに」。but と組み合わせて譲歩を表す。"
      },
      {
        "id": 26,
        "sourceSet": "③",
        "sourceNo": 9,
        "text": "Not everyone, （　）, is entirely comfortable with this new usage.",
        "choices": [
          "but",
          "though",
          "whenever",
          "while"
        ],
        "answer": 1,
        "translation": "とはいえ、誰もがこの新しい用法に完全に違和感がないわけではない。",
        "tip": "though は文中・文末で「もっとも／とはいえ」と使える。"
      },
      {
        "id": 27,
        "sourceSet": "③",
        "sourceNo": 10,
        "text": "The job wasn't very interesting, but （　） it was well-paid.",
        "choices": [
          "on the contrary",
          "on the other hand",
          "in addition",
          "all the more"
        ],
        "answer": 1,
        "translation": "その仕事はあまり面白くなかったが、その一方で給料はよかった。",
        "tip": "on the other hand = 「その一方で」。対比を表す。"
      },
      {
        "id": 28,
        "sourceSet": "③",
        "sourceNo": 11,
        "text": "Penny is by no means poor; （　）, she's quite rich.",
        "choices": [
          "by all means",
          "in fact",
          "in addition",
          "by the way"
        ],
        "answer": 1,
        "translation": "ペニーは決して貧しくない。実際、かなり裕福だ。",
        "tip": "in fact = 「実際には」。前の内容をさらに明確にする。"
      },
      {
        "id": 29,
        "sourceSet": "③",
        "sourceNo": 12,
        "text": "A: Hi, Mary, have you got any plans for the weekend?\nB: No, Tom. （　）, I have nothing to do this weekend. What are you going to do?",
        "choices": [
          "As a matter of fact",
          "To make matters worse",
          "Generally speaking",
          "I hope not"
        ],
        "answer": 0,
        "translation": "A：メアリー、週末の予定はある？\nB：ないよ。実を言うと、今週末は何もすることがないの。あなたはどうするの？",
        "tip": "as a matter of fact = 「実を言うと／実際のところ」。"
      },
      {
        "id": 30,
        "sourceSet": "③",
        "sourceNo": 13,
        "text": "Joseph stayed up late last night. （　）, he fell asleep during the mathematics class.",
        "choices": [
          "However",
          "As a result",
          "Instead",
          "In addition"
        ],
        "answer": 1,
        "translation": "ジョセフは昨夜遅くまで起きていた。その結果、数学の授業中に眠ってしまった。",
        "tip": "as a result = 「その結果」。原因と結果をつなぐ。"
      },
      {
        "id": 31,
        "sourceSet": "③",
        "sourceNo": 14,
        "text": "It's too late to go out now; （　）, it's starting to rain.",
        "choices": [
          "all the same",
          "at least",
          "besides",
          "therefore"
        ],
        "answer": 2,
        "translation": "今から出かけるには遅すぎる。そのうえ、雨も降り始めている。",
        "tip": "besides = 「そのうえ」。同方向の理由を追加する。"
      },
      {
        "id": 32,
        "sourceSet": "③",
        "sourceNo": 15,
        "text": "English students must study grammar; （　）, they must study reading, writing, and listening comprehension.",
        "choices": [
          "nonetheless",
          "in fact",
          "however",
          "in addition"
        ],
        "answer": 3,
        "translation": "英語を学ぶ学生は文法を勉強しなければならない。さらに、読解・作文・聴解も学ばなければならない。",
        "tip": "in addition = 「さらに／加えて」。情報を追加する。"
      },
      {
        "id": 33,
        "sourceSet": "③",
        "sourceNo": 16,
        "text": "My family is financially sound; （　）, we are debt free.",
        "choices": [
          "on the other hand",
          "for example",
          "for all that",
          "nevertheless"
        ],
        "answer": 1,
        "translation": "私の家族の家計は健全だ。例えば、借金はまったくない。",
        "tip": "for example = 「例えば」。一般的内容に具体例を加える。"
      },
      {
        "id": 34,
        "sourceSet": "③",
        "sourceNo": 17,
        "text": "Michael refused; （　）, his answer was \"no.\"",
        "choices": [
          "in other words",
          "otherwise",
          "words for words",
          "however"
        ],
        "answer": 0,
        "translation": "マイケルは断った。言い換えれば、彼の答えは「ノー」だった。",
        "tip": "in other words = 「言い換えれば」。"
      },
      {
        "id": 35,
        "sourceSet": "③",
        "sourceNo": 18,
        "text": "The tennis courts were closed, so we went bowling （　）.",
        "choices": [
          "either",
          "instead",
          "neither",
          "rather"
        ],
        "answer": 1,
        "translation": "テニスコートが閉まっていたので、代わりにボウリングへ行った。",
        "tip": "instead = 「代わりに」。文末でも使える。"
      },
      {
        "id": 36,
        "sourceSet": "③",
        "sourceNo": 19,
        "text": "I forgot to stop at the store on the way home and buy food for dinner. （　）, I decided to eat out tonight.",
        "choices": [
          "In addition",
          "In fact",
          "Nevertheless",
          "Specifically",
          "Therefore"
        ],
        "answer": 4,
        "translation": "帰宅途中に店に寄って夕食の食材を買うのを忘れた。そこで、今夜は外食することにした。",
        "tip": "therefore = 「したがって」。原因から結果を導く。"
      },
      {
        "id": 37,
        "sourceSet": "③",
        "sourceNo": 20,
        "text": "I （　） you that the wedding will take place as planned.",
        "choices": [
          "assure",
          "insure",
          "admire",
          "inspire"
        ],
        "answer": 0,
        "translation": "結婚式は予定どおり行われるとあなたに保証します。",
        "tip": "assure + 人 + that ... = 「人に〜だと保証する」。"
      },
      {
        "id": 38,
        "sourceSet": "③",
        "sourceNo": 21,
        "text": "We are having our annual yard sale. So come and spend a wonderful day shopping for books, clothes, and furniture （　） beds and tables.",
        "choices": [
          "sleeping",
          "making",
          "adding",
          "including"
        ],
        "answer": 3,
        "translation": "恒例のヤードセールを開きます。ぜひ来て、本や服、ベッドやテーブルを含む家具の買い物を楽しんでください。",
        "tip": "including = 「〜を含めて」。具体例を挙げる。"
      },
      {
        "id": 39,
        "sourceSet": "③",
        "sourceNo": 22,
        "text": "John shows no interest in international problems at all. I don't know how he can be so （　） to suffering in other countries.",
        "choices": [
          "indifferent",
          "sensitive",
          "sympathetic",
          "inheritable"
        ],
        "answer": 0,
        "translation": "ジョンは国際問題にまったく関心を示さない。どうして他国の人々の苦しみにそれほど無関心でいられるのか分からない。",
        "tip": "indifferent to A = 「Aに無関心な」。"
      },
      {
        "id": 40,
        "sourceSet": "③",
        "sourceNo": 23,
        "text": "I have tried to （　） Nancy from going abroad. She is too young.",
        "choices": [
          "encourage",
          "discourage",
          "convince",
          "persuade"
        ],
        "answer": 1,
        "translation": "私はナンシーが海外へ行くのを思いとどまらせようとしてきた。彼女は若すぎる。",
        "tip": "discourage A from -ing = 「Aが〜するのを思いとどまらせる」。"
      }
    ]
  }
];
