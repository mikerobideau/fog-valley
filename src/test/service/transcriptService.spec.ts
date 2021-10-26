import {TranscriptData} from "../../model/Transcript";
import {isNewTranscriptUnlocked, searchTranscripts} from "../../service/transcript/transcriptService";

const secret1 = 'secret1';
const secret2 = 'secret2';

const unlockedSecrets = [secret1];

describe('Given the transcript service', () => {
    let transcript: TranscriptData;

    describe('When searchTranscripts is called with a secret that is not unlocked', () => {
        beforeEach(() => {
            transcript = searchTranscripts(secret2, unlockedSecrets)[0];
        });

        test('Then the secret is correct', () => {
           expect(transcript.secret).toEqual(secret2);
        });

        test('Then the title is correct', () => {
            expect(transcript.title).toEqual('The Professor Part 1: This is a test title (secret = secret2)');
        });

        test('Then the character is correct', () => {
            expect(transcript.character).toEqual('The Professor');
        });
    });

    describe('When search transcripts is called with a secret that ignores case sensitivity', () => {
        beforeEach(() => {
            transcript = searchTranscripts('sEcret1', unlockedSecrets)[0];
        });

        test('Then it returns the transcript', () => {
            expect(transcript.title).toEqual('Helen Part 1: Helen transcript (secret = secret1)')
        });
    });

    describe('When search transcripts is called with a secret that has no matches', () => {
        let transcripts: TranscriptData[];

        beforeEach(() => {
            transcripts = searchTranscripts('invalidsecret', unlockedSecrets);
        });

        test('Then it returns an empty array', () => {
            expect(transcripts).toHaveLength(0);
        });
    });

    describe('When isNewSecretUnlocked is called', () => {
       test('Then it returns false if no new secret is unlocked', () => {
          expect(isNewTranscriptUnlocked([{
              title: 'title1',
              character: 'Professor',
              lines: [],
              secret: secret1
          }, {
              title: 'title2',
              character: 'Professor',
              lines: [],
              secret: 'abc'
          }], [secret1, 'abc', 'def'])).toEqual(false);
       });

        test('Then it returns true if secret is unlocked', () => {
            expect(isNewTranscriptUnlocked([{
                title: 'title1',
                character: 'Professor',
                lines: [],
                secret: secret1
            }, {
                title: 'title2',
                character: 'Professor',
                lines: [],
                secret: 'abc'
            }], ['abc', 'def'])).toEqual(true);
        });
    });


});