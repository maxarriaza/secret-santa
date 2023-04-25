type SecretSantaNode = string;

class SecretSantaLink {
    private _nodes: Array<SecretSantaNode>;

    constructor(nodeOne: SecretSantaNode, nodeTwo: SecretSantaNode) {
        this._nodes = [nodeOne, nodeTwo];
    }

    hasNode(node: string) {
        return this._nodes.includes(node);
    }
}

export class SecretSanta {
    private _nodes: Array<SecretSantaNode> = [];
    private _links: Array<SecretSantaLink> = [];
    private _distribution: Array<[SecretSantaNode, SecretSantaNode]> = [];

    // Method to build secret santa from people and couples
    static Build(people: Array<string>, couples: Array<[string, string]>) {
        const nodes = people;
        const links = [];
        for(let index = 0; index<people.length; ++index) {
            for(let index2=index+1; index2 < people.length; ++index2) {
                const personOne = people[index];
                const personTwo = people[index2];

                const coupleIndex = couples.findIndex((item) => item.includes(personOne) && item.includes(personTwo))
                if(coupleIndex === -1) {
                    const link = new SecretSantaLink(people[index], people[index2]);
                    links.push(link);
                }
            }
        }
        return new SecretSanta(nodes, links);
    }

    private constructor(nodes: Array<string>, links: Array<SecretSantaLink>) {
        this._nodes = nodes;
        this._links = links;
    }

    private _checkValidity() {
        let index = 0, isValid = true;
        while(isValid && index < this._nodes.length) {
            isValid = this._links.filter(item => item.hasNode(this._nodes[index])).length > 1
            ++index;
        }
        if(!isValid) throw new Error('Configuration not valid for a secret santa');
    }

    execute(): Array<[string, string]> {
        this._checkValidity();
        return [];
    }
}