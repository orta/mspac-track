## MS PAC Tracker

Takes the CSVs from [opensecrets](https://www.opensecrets.org/political-action-committees-pacs/microsoft-corp/C00227546/summary/2020) and finds out who has donated according to which representative pledged to object to [the electoral votes](https://www.theepochtimes.com/full-list-77-representatives-13-senators-pledge-to-object-to-electoral-votes_3645619.html) (according to the far-right Epoch Times).

See the sources:

 - MSPAC 2020 Donations [House](./csv/2020/house.csv) / [Senate](./csv/2020/senate.csv)
 - [Objectors](./objectors.json)
 - [Donations](./donations.json)

Now the vote has happened, I grabbed the data from [The Guardian](https://www.theguardian.com/us-news/2021/jan/07/list-republicans-voted-to-reject-election-results).

 - [Voted Against](./votedAgainst.json)
 - [Donations](./donationsVotes.json)

Run yourself:

```sh
git clone https://github.com/orta/mspac-track.git
cd mspac-track
yarn

# This will update ./donations.json
node generate.mjs
```
