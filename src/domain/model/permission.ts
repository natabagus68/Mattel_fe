import { Entity } from "./_Entity";
import { Checklist, IChecklist } from "./checklist";

export interface IPermission {
    id?: string;
    module: string;
    permission: IChecklist[];
    child: IPermission[];
}

export class Permission extends Entity<IPermission> {
    static create(props: IPermission): Permission {
        return new Permission(props);
    }

    unmarshall() {
        return {
            id: this.id,
            module: this.module,
            permission: this.permission,
            child: this.child,
        };
    }

    get module(): string {
        return this._props.module;
    }
    get permission(): IChecklist[] {
        return this._props.permission.map((item) => {
            return Checklist.create(item);
        });
    }

    get child(): IPermission[] {
        return this._props.child.map((item) => {
            return Permission.create(item);
        });
    }
}
