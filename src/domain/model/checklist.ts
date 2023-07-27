import { Entity } from "./_Entity";

export interface IChecklist {
    id?: string;
    name: string;
    active: boolean;
    disable: boolean;
}

export class Checklist extends Entity<IChecklist> {
    static create(props: IChecklist): Checklist {
        return new Checklist(props);
    }

    unmarshall() {
        return {
            id: this.id,
            name: this.name,
            active: this.active,
            disable: this.disable,
        };
    }

    get name() {
        return this._props.name;
    }
    get active() {
        return this._props.active;
    }
    get disable() {
        return this._props.disable;
    }
}
