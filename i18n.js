
// Bump this by 1 every time img/poster.webp is replaced, so browsers
// don't keep serving a cached, outdated poster under the same filename.
const POSTER_VERSION = 1;

const translations = {
    de: {
        home: {
            posterAlt: 'Veranstaltungsplakat: Der Münsterländer – Pokerabend mit Livestream auf Twitch und YouTube. Termin und Details siehe Bild.'
        },
        faq: {
            title: 'FAQ',
            drinks: {
                q: 'Wird es Getränke und Snacks geben?',
                a1: 'Ja, es gibt kostenlose Getränke und Snacks.',
                a2: 'Snacks bestehen meistens aus einer Mischung aus Schokoriegeln, Keksen und Weingummi. Getränke bestehen meistens aus Wasser, Red Bull und Light-Getränken.'
            },
            players: {
                q: 'Wie viele Spieler sind das Maximum und gibt es eine Warteliste?',
                a: 'Es können maximal 9 Spieler spielen und es gibt keine Warteliste – first come, first served.'
            },
            signup: {
                q: 'Wie kann ich mich für ein Spiel anmelden?',
                a: 'Dies geht exklusiv über die WhatsApp-Gruppe oder über direkten Kontakt mit dem Organisator.'
            },
            dealer: {
                q: 'Gibt es einen Dealer?',
                a: 'Ja, es gibt einen Dealer.'
            },
            cards: {
                q: 'Welches Kartenset wird benutzt?',
                a: 'In der Regel werden Faded Spade FSX Modern Karten benutzt.'
            },
            wifi: {
                q: 'Gibt es WLAN?',
                a: 'Ja, es gibt kostenloses WLAN.'
            }
        },
        rules: {
            basicTitle: 'Basisregeln',
            basic: [
                'Ein freundliches und respektvolles Miteinander ist die Basis für einen angenehmen Abend.',
                'Der Rake beträgt bei 1/1 5% vom Pot mit einem Cap von 5.',
                'Hände dürfen mit anderen Spielern geteilt werden, die nicht mehr in der Hand sind.',
                'Am Tisch herrscht absolutes Rauchverbot.',
                'Alle Chips müssen über den Dealer bezogen und zurückgegeben werden.',
                'Bitte behaltet eure Karten möglichst auf dem Tisch.',
                'Bitte geht respektvoll mit Chips, Karten und Equipment um.',
                'Bitte nutzt das WLAN nicht für fragwürdige Inhalte oder riesige Downloads.',
                'Die Sprache am Tisch ist Deutsch.',
                'Die Sitzreihenfolge wird am Abend bestimmt.',
                'Eventuell anwesende Hunde müssen gestreichelt werden, wenn sie darum bitten 😉'
            ],
            bettingTitle: 'Setz-Regeln',
            betting: [
                'String Betting ist nicht erlaubt.',
                'Verbale Setz-Ankündigungen sind bindend.',
                'Die One-Chip-Rule gilt.',
                'Bewegt eure Chips klar über die Setzlinie.'
            ],
            specialTitle: 'Sonderregeln',
            special: [
                'Das Board kann mehrfach gelegt werden, wenn alle Spieler zustimmen.',
                'Der Spieler links vom Big Blind (UTG) darf einen Straddle in Höhe des doppelten Big Blinds setzen.',
                'Wurde ein Straddle gesetzt, darf der Spieler links vom Straddle einen Re-Straddle in Höhe des doppelten Straddles setzen. Dies darf rund um den Tisch fortgesetzt werden.',
                'Mississippi Straddle sind nicht erlaubt.',
                'Wer mit 7-2 gewinnt, erhält ein Bounty von jedem Spieler.',
                'Wer einen anderen Spieler bankrott stellt, erhält ebenfalls ein Bounty.',
                'Es gibt pro Orbit einen optionalen PLO Double Board Bomb Pot.',
                'Der Dealer hat bei ungeklärten Situationen das letzte Wort.'
            ]
        },
        images: {
            title: 'Bilder',
            table: { alt: 'Pokertisch', caption: 'Pokertisch bevor es losgeht' },
            snacks: { alt: 'Snacks', caption: 'Snackwagen, der den Spielern kostenlos zur Verfügung steht' },
            action: { alt1: 'Action', alt2: 'Action2', caption: 'Action!' }
        }
    },
    en: {
        home: {
            posterAlt: 'Event poster: Der Münsterländer – poker night livestreamed on Twitch and YouTube. See image for date and details.'
        },
        faq: {
            title: 'FAQ',
            drinks: {
                q: 'Will there be drinks and snacks?',
                a1: 'Yes, drinks and snacks are provided free of charge.',
                a2: 'Snacks usually include chocolate bars, cookies, and gummy candy. Drinks usually include water, Red Bull, and light beverages.'
            },
            players: {
                q: 'How many players can join and is there a waiting list?',
                a: 'A maximum of 9 players can play and there is no waiting list — first come, first served.'
            },
            signup: {
                q: 'How can I sign up for a game?',
                a: 'Registration is handled exclusively through the WhatsApp group or direct contact with the organizer.'
            },
            dealer: {
                q: 'Is there a dealer?',
                a: 'Yes, there is a dedicated dealer.'
            },
            cards: {
                q: 'Which card set is used?',
                a: 'Faded Spade FSX Modern cards are typically used.'
            },
            wifi: {
                q: 'Is Wi-Fi available?',
                a: 'Yes, free Wi-Fi is available.'
            }
        },
        rules: {
            basicTitle: 'Basic Rules',
            basic: [
                'Friendly and respectful behavior is the foundation of a great evening.',
                'The rake for 1/1 games is 5% with a cap of 5.',
                'Hands may be discussed with players no longer involved in the hand.',
                'Smoking at the table is strictly prohibited.',
                'All chips must be purchased and redeemed through the dealer.',
                'Please keep your cards on the table whenever possible.',
                'Please treat chips, cards, and equipment with respect.',
                'Please do not use the Wi-Fi for questionable content or massive downloads.',
                'The language at the table is German.',
                'The seat order will be decided once the game starts.',
                'Any dogs present must be petted if they ask for it 😉'
            ],
            bettingTitle: 'Betting Rules',
            betting: [
                'String betting is not allowed.',
                'Verbal betting declarations are binding.',
                'The one-chip rule applies.',
                'Move your chips clearly across the betting line.'
            ],
            specialTitle: 'Special Rules',
            special: [
                'The board may be run multiple times if all remaining players agree.',
                'The player left of the big blind (UTG) may straddle for double the big blind.',
                'If a straddle has been posted, the player left of the straddle may re-straddle for 2x the straddle - This may continue around the table.',
                'Mississippi straddle is not allowed.',
                'Winning with 7-2 awards a bounty from every player.',
                'Eliminating another player also awards a bounty.',
                'There is one optional PLO double-board bomb pot per orbit.',
                'The dealer has the final say in unresolved situations.'
            ]
        },
        images: {
            title: 'Images',
            table: { alt: 'Poker table', caption: 'Poker table before the game starts' },
            snacks: { alt: 'Snacks', caption: 'Snack cart available free of charge for players' },
            action: { alt1: 'Action', alt2: 'Action2', caption: 'Action!' }
        }
    },
    nl: {
        home: {
            posterAlt: 'Evenementposter: Der Münsterländer – pokeravond livestream op Twitch en YouTube. Zie afbeelding voor datum en details.'
        },
        faq: {
            title: 'FAQ',
            drinks: {
                q: 'Zijn er drankjes en snacks beschikbaar?',
                a1: 'Ja, drankjes en snacks zijn gratis beschikbaar.',
                a2: 'Snacks bestaan meestal uit chocoladerepen, koekjes en winegums. Drankjes bestaan meestal uit water, Red Bull en light-dranken.'
            },
            players: {
                q: 'Hoeveel spelers kunnen meedoen en is er een wachtlijst?',
                a: 'Er kunnen maximaal 9 spelers deelnemen en er is geen wachtlijst — wie het eerst komt, het eerst maalt.'
            },
            signup: {
                q: 'Hoe kan ik me aanmelden voor een spel?',
                a: 'Dit gaat uitsluitend via de WhatsApp-groep of direct contact met de organisator.'
            },
            dealer: {
                q: 'Is er een dealer?',
                a: 'Ja, er is een dealer aanwezig.'
            },
            cards: {
                q: 'Welke kaarten worden gebruikt?',
                a: 'Meestal worden Faded Spade FSX Modern kaarten gebruikt.'
            },
            wifi: {
                q: 'Is er wifi beschikbaar?',
                a: 'Ja, er is gratis wifi beschikbaar.'
            }
        },
        rules: {
            basicTitle: 'Basisregels',
            basic: [
                'Vriendelijk en respectvol gedrag vormt de basis voor een prettige avond.',
                'De rake bij 1/1 bedraagt 5% met een cap van 5.',
                'Handen mogen gedeeld worden met spelers die niet meer in de hand zitten.',
                'Roken aan tafel is strikt verboden.',
                'Alle chips moeten via de dealer worden gekocht en ingewisseld.',
                'Houd je kaarten indien mogelijk op tafel.',
                'Ga respectvol om met chips, kaarten en apparatuur.',
                'Gebruik de wifi niet voor dubieuze inhoud of enorme downloads.',
                'De taal aan tafel is Duits.',
                'De zitvolgorde wordt bepaald zodra het spel begint.',
                'Aanwezige honden moeten geaaid worden als ze daarom vragen 😉'
            ],
            bettingTitle: 'Inzetregels',
            betting: [
                'String betting is niet toegestaan.',
                'Verbale aankondigingen van inzetten zijn bindend.',
                'De one-chip rule is van toepassing.',
                'Beweeg je chips duidelijk over de inzetlijn.'
            ],
            specialTitle: 'Speciale regels',
            special: [
                'Het board mag meerdere keren worden gedeeld als alle spelers akkoord gaan.',
                'De speler links van de big blind (UTG) mag een straddle plaatsen ter hoogte van twee keer de big blind.',
                'Als er een straddle is geplaatst, mag de speler links van de straddle een re-straddle plaatsen ter hoogte van twee keer de straddle. Dit mag doorgaan rond de tafel.',
                'Mississippi Straddle is verboden.',
                'Wie wint met 7-2 ontvangt een bounty van iedere speler.',
                'Wie een andere speler bust ontvangt eveneens een bounty.',
                'Er is per orbit een optionele PLO double-board bomb pot.',
                'De dealer heeft het laatste woord bij onduidelijke situaties.'
            ]
        },
        images: {
            title: "Foto's",
            table: { alt: 'Pokertafel', caption: 'Pokertafel voordat het spel begint' },
            snacks: { alt: 'Snacks', caption: 'Snackwagen die gratis beschikbaar is voor spelers' },
            action: { alt1: 'Actie', alt2: 'Actie2', caption: 'Actie!' }
        }
    }
};
