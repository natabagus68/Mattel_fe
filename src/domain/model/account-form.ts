import { Entity } from "./_Entity";

export interface IAccountForm {
    id?: string;
    name: string;
    email: string;
    kpk: string;
    password: string;
    role: string;
    position: string;
    file: any;
}

export class AccountForm extends Entity<IAccountForm> {
    static create(props: IAccountForm): AccountForm {
        return new AccountForm(props);
    }

    unmarshall() {
        return {
            id: this.id,
            name: this.name,
            email: this.email,
            kpk: this.kpk,
            password: this.password,
            role: this.role,
            position: this.position,
            file: this.file,
        };
    }

    get name(): string {
        return this._props.name;
    }
    get email(): string {
        return this._props.email;
    }
    get kpk(): string {
        return this._props.kpk;
    }
    get password(): string {
        return this._props.password;
    }
    get role(): string {
        return this._props.role;
    }
    get position(): string {
        return this._props.position;
    }
    get file(): any {
        return this._props.file;
    }
}
