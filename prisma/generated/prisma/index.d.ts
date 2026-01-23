
/**
 * Client
**/

import * as runtime from './runtime/client.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model rents
 * 
 */
export type rents = $Result.DefaultSelection<Prisma.$rentsPayload>
/**
 * Model cars
 * 
 */
export type cars = $Result.DefaultSelection<Prisma.$carsPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Rents
 * const rents = await prisma.rents.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://pris.ly/d/client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Rents
   * const rents = await prisma.rents.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://pris.ly/d/client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>

  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.rents`: Exposes CRUD operations for the **rents** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Rents
    * const rents = await prisma.rents.findMany()
    * ```
    */
  get rents(): Prisma.rentsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.cars`: Exposes CRUD operations for the **cars** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Cars
    * const cars = await prisma.cars.findMany()
    * ```
    */
  get cars(): Prisma.carsDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 7.3.0
   * Query Engine version: 9d6ad21cbbceab97458517b147a6a09ff43aa735
   */
  export type PrismaVersion = {
    client: string
    engine: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import Bytes = runtime.Bytes
  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    rents: 'rents',
    cars: 'cars'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]



  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "rents" | "cars"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      rents: {
        payload: Prisma.$rentsPayload<ExtArgs>
        fields: Prisma.rentsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.rentsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$rentsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.rentsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$rentsPayload>
          }
          findFirst: {
            args: Prisma.rentsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$rentsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.rentsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$rentsPayload>
          }
          findMany: {
            args: Prisma.rentsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$rentsPayload>[]
          }
          create: {
            args: Prisma.rentsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$rentsPayload>
          }
          createMany: {
            args: Prisma.rentsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.rentsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$rentsPayload>[]
          }
          delete: {
            args: Prisma.rentsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$rentsPayload>
          }
          update: {
            args: Prisma.rentsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$rentsPayload>
          }
          deleteMany: {
            args: Prisma.rentsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.rentsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.rentsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$rentsPayload>[]
          }
          upsert: {
            args: Prisma.rentsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$rentsPayload>
          }
          aggregate: {
            args: Prisma.RentsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateRents>
          }
          groupBy: {
            args: Prisma.rentsGroupByArgs<ExtArgs>
            result: $Utils.Optional<RentsGroupByOutputType>[]
          }
          count: {
            args: Prisma.rentsCountArgs<ExtArgs>
            result: $Utils.Optional<RentsCountAggregateOutputType> | number
          }
        }
      }
      cars: {
        payload: Prisma.$carsPayload<ExtArgs>
        fields: Prisma.carsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.carsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$carsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.carsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$carsPayload>
          }
          findFirst: {
            args: Prisma.carsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$carsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.carsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$carsPayload>
          }
          findMany: {
            args: Prisma.carsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$carsPayload>[]
          }
          create: {
            args: Prisma.carsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$carsPayload>
          }
          createMany: {
            args: Prisma.carsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.carsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$carsPayload>[]
          }
          delete: {
            args: Prisma.carsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$carsPayload>
          }
          update: {
            args: Prisma.carsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$carsPayload>
          }
          deleteMany: {
            args: Prisma.carsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.carsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.carsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$carsPayload>[]
          }
          upsert: {
            args: Prisma.carsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$carsPayload>
          }
          aggregate: {
            args: Prisma.CarsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCars>
          }
          groupBy: {
            args: Prisma.carsGroupByArgs<ExtArgs>
            result: $Utils.Optional<CarsGroupByOutputType>[]
          }
          count: {
            args: Prisma.carsCountArgs<ExtArgs>
            result: $Utils.Optional<CarsCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
     * ```
     * Read more in our [docs](https://pris.ly/d/logging).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory
    /**
     * Prisma Accelerate URL allowing the client to connect through Accelerate instead of a direct database.
     */
    accelerateUrl?: string
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
    /**
     * SQL commenter plugins that add metadata to SQL queries as comments.
     * Comments follow the sqlcommenter format: https://google.github.io/sqlcommenter/
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   adapter,
     *   comments: [
     *     traceContext(),
     *     queryInsights(),
     *   ],
     * })
     * ```
     */
    comments?: runtime.SqlCommenterPlugin[]
  }
  export type GlobalOmitConfig = {
    rents?: rentsOmit
    cars?: carsOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */



  /**
   * Models
   */

  /**
   * Model rents
   */

  export type AggregateRents = {
    _count: RentsCountAggregateOutputType | null
    _avg: RentsAvgAggregateOutputType | null
    _sum: RentsSumAggregateOutputType | null
    _min: RentsMinAggregateOutputType | null
    _max: RentsMaxAggregateOutputType | null
  }

  export type RentsAvgAggregateOutputType = {
    id: number | null
  }

  export type RentsSumAggregateOutputType = {
    id: number | null
  }

  export type RentsMinAggregateOutputType = {
    id: number | null
    data_in: Date | null
    data_out: Date | null
    car_placa: string | null
  }

  export type RentsMaxAggregateOutputType = {
    id: number | null
    data_in: Date | null
    data_out: Date | null
    car_placa: string | null
  }

  export type RentsCountAggregateOutputType = {
    id: number
    data_in: number
    data_out: number
    car_placa: number
    _all: number
  }


  export type RentsAvgAggregateInputType = {
    id?: true
  }

  export type RentsSumAggregateInputType = {
    id?: true
  }

  export type RentsMinAggregateInputType = {
    id?: true
    data_in?: true
    data_out?: true
    car_placa?: true
  }

  export type RentsMaxAggregateInputType = {
    id?: true
    data_in?: true
    data_out?: true
    car_placa?: true
  }

  export type RentsCountAggregateInputType = {
    id?: true
    data_in?: true
    data_out?: true
    car_placa?: true
    _all?: true
  }

  export type RentsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which rents to aggregate.
     */
    where?: rentsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of rents to fetch.
     */
    orderBy?: rentsOrderByWithRelationInput | rentsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: rentsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` rents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` rents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned rents
    **/
    _count?: true | RentsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: RentsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: RentsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RentsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RentsMaxAggregateInputType
  }

  export type GetRentsAggregateType<T extends RentsAggregateArgs> = {
        [P in keyof T & keyof AggregateRents]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRents[P]>
      : GetScalarType<T[P], AggregateRents[P]>
  }




  export type rentsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: rentsWhereInput
    orderBy?: rentsOrderByWithAggregationInput | rentsOrderByWithAggregationInput[]
    by: RentsScalarFieldEnum[] | RentsScalarFieldEnum
    having?: rentsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RentsCountAggregateInputType | true
    _avg?: RentsAvgAggregateInputType
    _sum?: RentsSumAggregateInputType
    _min?: RentsMinAggregateInputType
    _max?: RentsMaxAggregateInputType
  }

  export type RentsGroupByOutputType = {
    id: number
    data_in: Date
    data_out: Date
    car_placa: string
    _count: RentsCountAggregateOutputType | null
    _avg: RentsAvgAggregateOutputType | null
    _sum: RentsSumAggregateOutputType | null
    _min: RentsMinAggregateOutputType | null
    _max: RentsMaxAggregateOutputType | null
  }

  type GetRentsGroupByPayload<T extends rentsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RentsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RentsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RentsGroupByOutputType[P]>
            : GetScalarType<T[P], RentsGroupByOutputType[P]>
        }
      >
    >


  export type rentsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    data_in?: boolean
    data_out?: boolean
    car_placa?: boolean
    car?: boolean | carsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["rents"]>

  export type rentsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    data_in?: boolean
    data_out?: boolean
    car_placa?: boolean
    car?: boolean | carsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["rents"]>

  export type rentsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    data_in?: boolean
    data_out?: boolean
    car_placa?: boolean
    car?: boolean | carsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["rents"]>

  export type rentsSelectScalar = {
    id?: boolean
    data_in?: boolean
    data_out?: boolean
    car_placa?: boolean
  }

  export type rentsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "data_in" | "data_out" | "car_placa", ExtArgs["result"]["rents"]>
  export type rentsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    car?: boolean | carsDefaultArgs<ExtArgs>
  }
  export type rentsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    car?: boolean | carsDefaultArgs<ExtArgs>
  }
  export type rentsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    car?: boolean | carsDefaultArgs<ExtArgs>
  }

  export type $rentsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "rents"
    objects: {
      car: Prisma.$carsPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      data_in: Date
      data_out: Date
      car_placa: string
    }, ExtArgs["result"]["rents"]>
    composites: {}
  }

  type rentsGetPayload<S extends boolean | null | undefined | rentsDefaultArgs> = $Result.GetResult<Prisma.$rentsPayload, S>

  type rentsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<rentsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: RentsCountAggregateInputType | true
    }

  export interface rentsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['rents'], meta: { name: 'rents' } }
    /**
     * Find zero or one Rents that matches the filter.
     * @param {rentsFindUniqueArgs} args - Arguments to find a Rents
     * @example
     * // Get one Rents
     * const rents = await prisma.rents.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends rentsFindUniqueArgs>(args: SelectSubset<T, rentsFindUniqueArgs<ExtArgs>>): Prisma__rentsClient<$Result.GetResult<Prisma.$rentsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Rents that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {rentsFindUniqueOrThrowArgs} args - Arguments to find a Rents
     * @example
     * // Get one Rents
     * const rents = await prisma.rents.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends rentsFindUniqueOrThrowArgs>(args: SelectSubset<T, rentsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__rentsClient<$Result.GetResult<Prisma.$rentsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Rents that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {rentsFindFirstArgs} args - Arguments to find a Rents
     * @example
     * // Get one Rents
     * const rents = await prisma.rents.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends rentsFindFirstArgs>(args?: SelectSubset<T, rentsFindFirstArgs<ExtArgs>>): Prisma__rentsClient<$Result.GetResult<Prisma.$rentsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Rents that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {rentsFindFirstOrThrowArgs} args - Arguments to find a Rents
     * @example
     * // Get one Rents
     * const rents = await prisma.rents.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends rentsFindFirstOrThrowArgs>(args?: SelectSubset<T, rentsFindFirstOrThrowArgs<ExtArgs>>): Prisma__rentsClient<$Result.GetResult<Prisma.$rentsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Rents that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {rentsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Rents
     * const rents = await prisma.rents.findMany()
     * 
     * // Get first 10 Rents
     * const rents = await prisma.rents.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const rentsWithIdOnly = await prisma.rents.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends rentsFindManyArgs>(args?: SelectSubset<T, rentsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$rentsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Rents.
     * @param {rentsCreateArgs} args - Arguments to create a Rents.
     * @example
     * // Create one Rents
     * const Rents = await prisma.rents.create({
     *   data: {
     *     // ... data to create a Rents
     *   }
     * })
     * 
     */
    create<T extends rentsCreateArgs>(args: SelectSubset<T, rentsCreateArgs<ExtArgs>>): Prisma__rentsClient<$Result.GetResult<Prisma.$rentsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Rents.
     * @param {rentsCreateManyArgs} args - Arguments to create many Rents.
     * @example
     * // Create many Rents
     * const rents = await prisma.rents.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends rentsCreateManyArgs>(args?: SelectSubset<T, rentsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Rents and returns the data saved in the database.
     * @param {rentsCreateManyAndReturnArgs} args - Arguments to create many Rents.
     * @example
     * // Create many Rents
     * const rents = await prisma.rents.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Rents and only return the `id`
     * const rentsWithIdOnly = await prisma.rents.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends rentsCreateManyAndReturnArgs>(args?: SelectSubset<T, rentsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$rentsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Rents.
     * @param {rentsDeleteArgs} args - Arguments to delete one Rents.
     * @example
     * // Delete one Rents
     * const Rents = await prisma.rents.delete({
     *   where: {
     *     // ... filter to delete one Rents
     *   }
     * })
     * 
     */
    delete<T extends rentsDeleteArgs>(args: SelectSubset<T, rentsDeleteArgs<ExtArgs>>): Prisma__rentsClient<$Result.GetResult<Prisma.$rentsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Rents.
     * @param {rentsUpdateArgs} args - Arguments to update one Rents.
     * @example
     * // Update one Rents
     * const rents = await prisma.rents.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends rentsUpdateArgs>(args: SelectSubset<T, rentsUpdateArgs<ExtArgs>>): Prisma__rentsClient<$Result.GetResult<Prisma.$rentsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Rents.
     * @param {rentsDeleteManyArgs} args - Arguments to filter Rents to delete.
     * @example
     * // Delete a few Rents
     * const { count } = await prisma.rents.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends rentsDeleteManyArgs>(args?: SelectSubset<T, rentsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Rents.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {rentsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Rents
     * const rents = await prisma.rents.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends rentsUpdateManyArgs>(args: SelectSubset<T, rentsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Rents and returns the data updated in the database.
     * @param {rentsUpdateManyAndReturnArgs} args - Arguments to update many Rents.
     * @example
     * // Update many Rents
     * const rents = await prisma.rents.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Rents and only return the `id`
     * const rentsWithIdOnly = await prisma.rents.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends rentsUpdateManyAndReturnArgs>(args: SelectSubset<T, rentsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$rentsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Rents.
     * @param {rentsUpsertArgs} args - Arguments to update or create a Rents.
     * @example
     * // Update or create a Rents
     * const rents = await prisma.rents.upsert({
     *   create: {
     *     // ... data to create a Rents
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Rents we want to update
     *   }
     * })
     */
    upsert<T extends rentsUpsertArgs>(args: SelectSubset<T, rentsUpsertArgs<ExtArgs>>): Prisma__rentsClient<$Result.GetResult<Prisma.$rentsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Rents.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {rentsCountArgs} args - Arguments to filter Rents to count.
     * @example
     * // Count the number of Rents
     * const count = await prisma.rents.count({
     *   where: {
     *     // ... the filter for the Rents we want to count
     *   }
     * })
    **/
    count<T extends rentsCountArgs>(
      args?: Subset<T, rentsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RentsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Rents.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RentsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends RentsAggregateArgs>(args: Subset<T, RentsAggregateArgs>): Prisma.PrismaPromise<GetRentsAggregateType<T>>

    /**
     * Group by Rents.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {rentsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends rentsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: rentsGroupByArgs['orderBy'] }
        : { orderBy?: rentsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, rentsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRentsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the rents model
   */
  readonly fields: rentsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for rents.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__rentsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    car<T extends carsDefaultArgs<ExtArgs> = {}>(args?: Subset<T, carsDefaultArgs<ExtArgs>>): Prisma__carsClient<$Result.GetResult<Prisma.$carsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the rents model
   */
  interface rentsFieldRefs {
    readonly id: FieldRef<"rents", 'Int'>
    readonly data_in: FieldRef<"rents", 'DateTime'>
    readonly data_out: FieldRef<"rents", 'DateTime'>
    readonly car_placa: FieldRef<"rents", 'String'>
  }
    

  // Custom InputTypes
  /**
   * rents findUnique
   */
  export type rentsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the rents
     */
    select?: rentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the rents
     */
    omit?: rentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: rentsInclude<ExtArgs> | null
    /**
     * Filter, which rents to fetch.
     */
    where: rentsWhereUniqueInput
  }

  /**
   * rents findUniqueOrThrow
   */
  export type rentsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the rents
     */
    select?: rentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the rents
     */
    omit?: rentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: rentsInclude<ExtArgs> | null
    /**
     * Filter, which rents to fetch.
     */
    where: rentsWhereUniqueInput
  }

  /**
   * rents findFirst
   */
  export type rentsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the rents
     */
    select?: rentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the rents
     */
    omit?: rentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: rentsInclude<ExtArgs> | null
    /**
     * Filter, which rents to fetch.
     */
    where?: rentsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of rents to fetch.
     */
    orderBy?: rentsOrderByWithRelationInput | rentsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for rents.
     */
    cursor?: rentsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` rents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` rents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of rents.
     */
    distinct?: RentsScalarFieldEnum | RentsScalarFieldEnum[]
  }

  /**
   * rents findFirstOrThrow
   */
  export type rentsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the rents
     */
    select?: rentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the rents
     */
    omit?: rentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: rentsInclude<ExtArgs> | null
    /**
     * Filter, which rents to fetch.
     */
    where?: rentsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of rents to fetch.
     */
    orderBy?: rentsOrderByWithRelationInput | rentsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for rents.
     */
    cursor?: rentsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` rents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` rents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of rents.
     */
    distinct?: RentsScalarFieldEnum | RentsScalarFieldEnum[]
  }

  /**
   * rents findMany
   */
  export type rentsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the rents
     */
    select?: rentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the rents
     */
    omit?: rentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: rentsInclude<ExtArgs> | null
    /**
     * Filter, which rents to fetch.
     */
    where?: rentsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of rents to fetch.
     */
    orderBy?: rentsOrderByWithRelationInput | rentsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing rents.
     */
    cursor?: rentsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` rents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` rents.
     */
    skip?: number
    distinct?: RentsScalarFieldEnum | RentsScalarFieldEnum[]
  }

  /**
   * rents create
   */
  export type rentsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the rents
     */
    select?: rentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the rents
     */
    omit?: rentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: rentsInclude<ExtArgs> | null
    /**
     * The data needed to create a rents.
     */
    data: XOR<rentsCreateInput, rentsUncheckedCreateInput>
  }

  /**
   * rents createMany
   */
  export type rentsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many rents.
     */
    data: rentsCreateManyInput | rentsCreateManyInput[]
  }

  /**
   * rents createManyAndReturn
   */
  export type rentsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the rents
     */
    select?: rentsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the rents
     */
    omit?: rentsOmit<ExtArgs> | null
    /**
     * The data used to create many rents.
     */
    data: rentsCreateManyInput | rentsCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: rentsIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * rents update
   */
  export type rentsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the rents
     */
    select?: rentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the rents
     */
    omit?: rentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: rentsInclude<ExtArgs> | null
    /**
     * The data needed to update a rents.
     */
    data: XOR<rentsUpdateInput, rentsUncheckedUpdateInput>
    /**
     * Choose, which rents to update.
     */
    where: rentsWhereUniqueInput
  }

  /**
   * rents updateMany
   */
  export type rentsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update rents.
     */
    data: XOR<rentsUpdateManyMutationInput, rentsUncheckedUpdateManyInput>
    /**
     * Filter which rents to update
     */
    where?: rentsWhereInput
    /**
     * Limit how many rents to update.
     */
    limit?: number
  }

  /**
   * rents updateManyAndReturn
   */
  export type rentsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the rents
     */
    select?: rentsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the rents
     */
    omit?: rentsOmit<ExtArgs> | null
    /**
     * The data used to update rents.
     */
    data: XOR<rentsUpdateManyMutationInput, rentsUncheckedUpdateManyInput>
    /**
     * Filter which rents to update
     */
    where?: rentsWhereInput
    /**
     * Limit how many rents to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: rentsIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * rents upsert
   */
  export type rentsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the rents
     */
    select?: rentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the rents
     */
    omit?: rentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: rentsInclude<ExtArgs> | null
    /**
     * The filter to search for the rents to update in case it exists.
     */
    where: rentsWhereUniqueInput
    /**
     * In case the rents found by the `where` argument doesn't exist, create a new rents with this data.
     */
    create: XOR<rentsCreateInput, rentsUncheckedCreateInput>
    /**
     * In case the rents was found with the provided `where` argument, update it with this data.
     */
    update: XOR<rentsUpdateInput, rentsUncheckedUpdateInput>
  }

  /**
   * rents delete
   */
  export type rentsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the rents
     */
    select?: rentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the rents
     */
    omit?: rentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: rentsInclude<ExtArgs> | null
    /**
     * Filter which rents to delete.
     */
    where: rentsWhereUniqueInput
  }

  /**
   * rents deleteMany
   */
  export type rentsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which rents to delete
     */
    where?: rentsWhereInput
    /**
     * Limit how many rents to delete.
     */
    limit?: number
  }

  /**
   * rents without action
   */
  export type rentsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the rents
     */
    select?: rentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the rents
     */
    omit?: rentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: rentsInclude<ExtArgs> | null
  }


  /**
   * Model cars
   */

  export type AggregateCars = {
    _count: CarsCountAggregateOutputType | null
    _avg: CarsAvgAggregateOutputType | null
    _sum: CarsSumAggregateOutputType | null
    _min: CarsMinAggregateOutputType | null
    _max: CarsMaxAggregateOutputType | null
  }

  export type CarsAvgAggregateOutputType = {
    ano: number | null
  }

  export type CarsSumAggregateOutputType = {
    ano: number | null
  }

  export type CarsMinAggregateOutputType = {
    placa: string | null
    ano: number | null
    cor: string | null
    rented: boolean | null
  }

  export type CarsMaxAggregateOutputType = {
    placa: string | null
    ano: number | null
    cor: string | null
    rented: boolean | null
  }

  export type CarsCountAggregateOutputType = {
    placa: number
    ano: number
    cor: number
    rented: number
    _all: number
  }


  export type CarsAvgAggregateInputType = {
    ano?: true
  }

  export type CarsSumAggregateInputType = {
    ano?: true
  }

  export type CarsMinAggregateInputType = {
    placa?: true
    ano?: true
    cor?: true
    rented?: true
  }

  export type CarsMaxAggregateInputType = {
    placa?: true
    ano?: true
    cor?: true
    rented?: true
  }

  export type CarsCountAggregateInputType = {
    placa?: true
    ano?: true
    cor?: true
    rented?: true
    _all?: true
  }

  export type CarsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which cars to aggregate.
     */
    where?: carsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of cars to fetch.
     */
    orderBy?: carsOrderByWithRelationInput | carsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: carsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` cars from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` cars.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned cars
    **/
    _count?: true | CarsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CarsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CarsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CarsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CarsMaxAggregateInputType
  }

  export type GetCarsAggregateType<T extends CarsAggregateArgs> = {
        [P in keyof T & keyof AggregateCars]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCars[P]>
      : GetScalarType<T[P], AggregateCars[P]>
  }




  export type carsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: carsWhereInput
    orderBy?: carsOrderByWithAggregationInput | carsOrderByWithAggregationInput[]
    by: CarsScalarFieldEnum[] | CarsScalarFieldEnum
    having?: carsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CarsCountAggregateInputType | true
    _avg?: CarsAvgAggregateInputType
    _sum?: CarsSumAggregateInputType
    _min?: CarsMinAggregateInputType
    _max?: CarsMaxAggregateInputType
  }

  export type CarsGroupByOutputType = {
    placa: string
    ano: number
    cor: string
    rented: boolean
    _count: CarsCountAggregateOutputType | null
    _avg: CarsAvgAggregateOutputType | null
    _sum: CarsSumAggregateOutputType | null
    _min: CarsMinAggregateOutputType | null
    _max: CarsMaxAggregateOutputType | null
  }

  type GetCarsGroupByPayload<T extends carsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CarsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CarsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CarsGroupByOutputType[P]>
            : GetScalarType<T[P], CarsGroupByOutputType[P]>
        }
      >
    >


  export type carsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    placa?: boolean
    ano?: boolean
    cor?: boolean
    rented?: boolean
    rent?: boolean | cars$rentArgs<ExtArgs>
  }, ExtArgs["result"]["cars"]>

  export type carsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    placa?: boolean
    ano?: boolean
    cor?: boolean
    rented?: boolean
  }, ExtArgs["result"]["cars"]>

  export type carsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    placa?: boolean
    ano?: boolean
    cor?: boolean
    rented?: boolean
  }, ExtArgs["result"]["cars"]>

  export type carsSelectScalar = {
    placa?: boolean
    ano?: boolean
    cor?: boolean
    rented?: boolean
  }

  export type carsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"placa" | "ano" | "cor" | "rented", ExtArgs["result"]["cars"]>
  export type carsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    rent?: boolean | cars$rentArgs<ExtArgs>
  }
  export type carsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type carsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $carsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "cars"
    objects: {
      rent: Prisma.$rentsPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      placa: string
      ano: number
      cor: string
      rented: boolean
    }, ExtArgs["result"]["cars"]>
    composites: {}
  }

  type carsGetPayload<S extends boolean | null | undefined | carsDefaultArgs> = $Result.GetResult<Prisma.$carsPayload, S>

  type carsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<carsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CarsCountAggregateInputType | true
    }

  export interface carsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['cars'], meta: { name: 'cars' } }
    /**
     * Find zero or one Cars that matches the filter.
     * @param {carsFindUniqueArgs} args - Arguments to find a Cars
     * @example
     * // Get one Cars
     * const cars = await prisma.cars.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends carsFindUniqueArgs>(args: SelectSubset<T, carsFindUniqueArgs<ExtArgs>>): Prisma__carsClient<$Result.GetResult<Prisma.$carsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Cars that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {carsFindUniqueOrThrowArgs} args - Arguments to find a Cars
     * @example
     * // Get one Cars
     * const cars = await prisma.cars.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends carsFindUniqueOrThrowArgs>(args: SelectSubset<T, carsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__carsClient<$Result.GetResult<Prisma.$carsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Cars that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {carsFindFirstArgs} args - Arguments to find a Cars
     * @example
     * // Get one Cars
     * const cars = await prisma.cars.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends carsFindFirstArgs>(args?: SelectSubset<T, carsFindFirstArgs<ExtArgs>>): Prisma__carsClient<$Result.GetResult<Prisma.$carsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Cars that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {carsFindFirstOrThrowArgs} args - Arguments to find a Cars
     * @example
     * // Get one Cars
     * const cars = await prisma.cars.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends carsFindFirstOrThrowArgs>(args?: SelectSubset<T, carsFindFirstOrThrowArgs<ExtArgs>>): Prisma__carsClient<$Result.GetResult<Prisma.$carsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Cars that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {carsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Cars
     * const cars = await prisma.cars.findMany()
     * 
     * // Get first 10 Cars
     * const cars = await prisma.cars.findMany({ take: 10 })
     * 
     * // Only select the `placa`
     * const carsWithPlacaOnly = await prisma.cars.findMany({ select: { placa: true } })
     * 
     */
    findMany<T extends carsFindManyArgs>(args?: SelectSubset<T, carsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$carsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Cars.
     * @param {carsCreateArgs} args - Arguments to create a Cars.
     * @example
     * // Create one Cars
     * const Cars = await prisma.cars.create({
     *   data: {
     *     // ... data to create a Cars
     *   }
     * })
     * 
     */
    create<T extends carsCreateArgs>(args: SelectSubset<T, carsCreateArgs<ExtArgs>>): Prisma__carsClient<$Result.GetResult<Prisma.$carsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Cars.
     * @param {carsCreateManyArgs} args - Arguments to create many Cars.
     * @example
     * // Create many Cars
     * const cars = await prisma.cars.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends carsCreateManyArgs>(args?: SelectSubset<T, carsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Cars and returns the data saved in the database.
     * @param {carsCreateManyAndReturnArgs} args - Arguments to create many Cars.
     * @example
     * // Create many Cars
     * const cars = await prisma.cars.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Cars and only return the `placa`
     * const carsWithPlacaOnly = await prisma.cars.createManyAndReturn({
     *   select: { placa: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends carsCreateManyAndReturnArgs>(args?: SelectSubset<T, carsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$carsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Cars.
     * @param {carsDeleteArgs} args - Arguments to delete one Cars.
     * @example
     * // Delete one Cars
     * const Cars = await prisma.cars.delete({
     *   where: {
     *     // ... filter to delete one Cars
     *   }
     * })
     * 
     */
    delete<T extends carsDeleteArgs>(args: SelectSubset<T, carsDeleteArgs<ExtArgs>>): Prisma__carsClient<$Result.GetResult<Prisma.$carsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Cars.
     * @param {carsUpdateArgs} args - Arguments to update one Cars.
     * @example
     * // Update one Cars
     * const cars = await prisma.cars.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends carsUpdateArgs>(args: SelectSubset<T, carsUpdateArgs<ExtArgs>>): Prisma__carsClient<$Result.GetResult<Prisma.$carsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Cars.
     * @param {carsDeleteManyArgs} args - Arguments to filter Cars to delete.
     * @example
     * // Delete a few Cars
     * const { count } = await prisma.cars.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends carsDeleteManyArgs>(args?: SelectSubset<T, carsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Cars.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {carsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Cars
     * const cars = await prisma.cars.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends carsUpdateManyArgs>(args: SelectSubset<T, carsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Cars and returns the data updated in the database.
     * @param {carsUpdateManyAndReturnArgs} args - Arguments to update many Cars.
     * @example
     * // Update many Cars
     * const cars = await prisma.cars.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Cars and only return the `placa`
     * const carsWithPlacaOnly = await prisma.cars.updateManyAndReturn({
     *   select: { placa: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends carsUpdateManyAndReturnArgs>(args: SelectSubset<T, carsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$carsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Cars.
     * @param {carsUpsertArgs} args - Arguments to update or create a Cars.
     * @example
     * // Update or create a Cars
     * const cars = await prisma.cars.upsert({
     *   create: {
     *     // ... data to create a Cars
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Cars we want to update
     *   }
     * })
     */
    upsert<T extends carsUpsertArgs>(args: SelectSubset<T, carsUpsertArgs<ExtArgs>>): Prisma__carsClient<$Result.GetResult<Prisma.$carsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Cars.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {carsCountArgs} args - Arguments to filter Cars to count.
     * @example
     * // Count the number of Cars
     * const count = await prisma.cars.count({
     *   where: {
     *     // ... the filter for the Cars we want to count
     *   }
     * })
    **/
    count<T extends carsCountArgs>(
      args?: Subset<T, carsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CarsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Cars.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CarsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CarsAggregateArgs>(args: Subset<T, CarsAggregateArgs>): Prisma.PrismaPromise<GetCarsAggregateType<T>>

    /**
     * Group by Cars.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {carsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends carsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: carsGroupByArgs['orderBy'] }
        : { orderBy?: carsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, carsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCarsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the cars model
   */
  readonly fields: carsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for cars.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__carsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    rent<T extends cars$rentArgs<ExtArgs> = {}>(args?: Subset<T, cars$rentArgs<ExtArgs>>): Prisma__rentsClient<$Result.GetResult<Prisma.$rentsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the cars model
   */
  interface carsFieldRefs {
    readonly placa: FieldRef<"cars", 'String'>
    readonly ano: FieldRef<"cars", 'Int'>
    readonly cor: FieldRef<"cars", 'String'>
    readonly rented: FieldRef<"cars", 'Boolean'>
  }
    

  // Custom InputTypes
  /**
   * cars findUnique
   */
  export type carsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cars
     */
    select?: carsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the cars
     */
    omit?: carsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: carsInclude<ExtArgs> | null
    /**
     * Filter, which cars to fetch.
     */
    where: carsWhereUniqueInput
  }

  /**
   * cars findUniqueOrThrow
   */
  export type carsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cars
     */
    select?: carsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the cars
     */
    omit?: carsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: carsInclude<ExtArgs> | null
    /**
     * Filter, which cars to fetch.
     */
    where: carsWhereUniqueInput
  }

  /**
   * cars findFirst
   */
  export type carsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cars
     */
    select?: carsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the cars
     */
    omit?: carsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: carsInclude<ExtArgs> | null
    /**
     * Filter, which cars to fetch.
     */
    where?: carsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of cars to fetch.
     */
    orderBy?: carsOrderByWithRelationInput | carsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for cars.
     */
    cursor?: carsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` cars from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` cars.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of cars.
     */
    distinct?: CarsScalarFieldEnum | CarsScalarFieldEnum[]
  }

  /**
   * cars findFirstOrThrow
   */
  export type carsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cars
     */
    select?: carsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the cars
     */
    omit?: carsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: carsInclude<ExtArgs> | null
    /**
     * Filter, which cars to fetch.
     */
    where?: carsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of cars to fetch.
     */
    orderBy?: carsOrderByWithRelationInput | carsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for cars.
     */
    cursor?: carsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` cars from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` cars.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of cars.
     */
    distinct?: CarsScalarFieldEnum | CarsScalarFieldEnum[]
  }

  /**
   * cars findMany
   */
  export type carsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cars
     */
    select?: carsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the cars
     */
    omit?: carsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: carsInclude<ExtArgs> | null
    /**
     * Filter, which cars to fetch.
     */
    where?: carsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of cars to fetch.
     */
    orderBy?: carsOrderByWithRelationInput | carsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing cars.
     */
    cursor?: carsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` cars from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` cars.
     */
    skip?: number
    distinct?: CarsScalarFieldEnum | CarsScalarFieldEnum[]
  }

  /**
   * cars create
   */
  export type carsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cars
     */
    select?: carsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the cars
     */
    omit?: carsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: carsInclude<ExtArgs> | null
    /**
     * The data needed to create a cars.
     */
    data: XOR<carsCreateInput, carsUncheckedCreateInput>
  }

  /**
   * cars createMany
   */
  export type carsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many cars.
     */
    data: carsCreateManyInput | carsCreateManyInput[]
  }

  /**
   * cars createManyAndReturn
   */
  export type carsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cars
     */
    select?: carsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the cars
     */
    omit?: carsOmit<ExtArgs> | null
    /**
     * The data used to create many cars.
     */
    data: carsCreateManyInput | carsCreateManyInput[]
  }

  /**
   * cars update
   */
  export type carsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cars
     */
    select?: carsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the cars
     */
    omit?: carsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: carsInclude<ExtArgs> | null
    /**
     * The data needed to update a cars.
     */
    data: XOR<carsUpdateInput, carsUncheckedUpdateInput>
    /**
     * Choose, which cars to update.
     */
    where: carsWhereUniqueInput
  }

  /**
   * cars updateMany
   */
  export type carsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update cars.
     */
    data: XOR<carsUpdateManyMutationInput, carsUncheckedUpdateManyInput>
    /**
     * Filter which cars to update
     */
    where?: carsWhereInput
    /**
     * Limit how many cars to update.
     */
    limit?: number
  }

  /**
   * cars updateManyAndReturn
   */
  export type carsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cars
     */
    select?: carsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the cars
     */
    omit?: carsOmit<ExtArgs> | null
    /**
     * The data used to update cars.
     */
    data: XOR<carsUpdateManyMutationInput, carsUncheckedUpdateManyInput>
    /**
     * Filter which cars to update
     */
    where?: carsWhereInput
    /**
     * Limit how many cars to update.
     */
    limit?: number
  }

  /**
   * cars upsert
   */
  export type carsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cars
     */
    select?: carsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the cars
     */
    omit?: carsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: carsInclude<ExtArgs> | null
    /**
     * The filter to search for the cars to update in case it exists.
     */
    where: carsWhereUniqueInput
    /**
     * In case the cars found by the `where` argument doesn't exist, create a new cars with this data.
     */
    create: XOR<carsCreateInput, carsUncheckedCreateInput>
    /**
     * In case the cars was found with the provided `where` argument, update it with this data.
     */
    update: XOR<carsUpdateInput, carsUncheckedUpdateInput>
  }

  /**
   * cars delete
   */
  export type carsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cars
     */
    select?: carsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the cars
     */
    omit?: carsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: carsInclude<ExtArgs> | null
    /**
     * Filter which cars to delete.
     */
    where: carsWhereUniqueInput
  }

  /**
   * cars deleteMany
   */
  export type carsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which cars to delete
     */
    where?: carsWhereInput
    /**
     * Limit how many cars to delete.
     */
    limit?: number
  }

  /**
   * cars.rent
   */
  export type cars$rentArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the rents
     */
    select?: rentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the rents
     */
    omit?: rentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: rentsInclude<ExtArgs> | null
    where?: rentsWhereInput
  }

  /**
   * cars without action
   */
  export type carsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cars
     */
    select?: carsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the cars
     */
    omit?: carsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: carsInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const RentsScalarFieldEnum: {
    id: 'id',
    data_in: 'data_in',
    data_out: 'data_out',
    car_placa: 'car_placa'
  };

  export type RentsScalarFieldEnum = (typeof RentsScalarFieldEnum)[keyof typeof RentsScalarFieldEnum]


  export const CarsScalarFieldEnum: {
    placa: 'placa',
    ano: 'ano',
    cor: 'cor',
    rented: 'rented'
  };

  export type CarsScalarFieldEnum = (typeof CarsScalarFieldEnum)[keyof typeof CarsScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    
  /**
   * Deep Input Types
   */


  export type rentsWhereInput = {
    AND?: rentsWhereInput | rentsWhereInput[]
    OR?: rentsWhereInput[]
    NOT?: rentsWhereInput | rentsWhereInput[]
    id?: IntFilter<"rents"> | number
    data_in?: DateTimeFilter<"rents"> | Date | string
    data_out?: DateTimeFilter<"rents"> | Date | string
    car_placa?: StringFilter<"rents"> | string
    car?: XOR<CarsScalarRelationFilter, carsWhereInput>
  }

  export type rentsOrderByWithRelationInput = {
    id?: SortOrder
    data_in?: SortOrder
    data_out?: SortOrder
    car_placa?: SortOrder
    car?: carsOrderByWithRelationInput
  }

  export type rentsWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    car_placa?: string
    AND?: rentsWhereInput | rentsWhereInput[]
    OR?: rentsWhereInput[]
    NOT?: rentsWhereInput | rentsWhereInput[]
    data_in?: DateTimeFilter<"rents"> | Date | string
    data_out?: DateTimeFilter<"rents"> | Date | string
    car?: XOR<CarsScalarRelationFilter, carsWhereInput>
  }, "id" | "car_placa">

  export type rentsOrderByWithAggregationInput = {
    id?: SortOrder
    data_in?: SortOrder
    data_out?: SortOrder
    car_placa?: SortOrder
    _count?: rentsCountOrderByAggregateInput
    _avg?: rentsAvgOrderByAggregateInput
    _max?: rentsMaxOrderByAggregateInput
    _min?: rentsMinOrderByAggregateInput
    _sum?: rentsSumOrderByAggregateInput
  }

  export type rentsScalarWhereWithAggregatesInput = {
    AND?: rentsScalarWhereWithAggregatesInput | rentsScalarWhereWithAggregatesInput[]
    OR?: rentsScalarWhereWithAggregatesInput[]
    NOT?: rentsScalarWhereWithAggregatesInput | rentsScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"rents"> | number
    data_in?: DateTimeWithAggregatesFilter<"rents"> | Date | string
    data_out?: DateTimeWithAggregatesFilter<"rents"> | Date | string
    car_placa?: StringWithAggregatesFilter<"rents"> | string
  }

  export type carsWhereInput = {
    AND?: carsWhereInput | carsWhereInput[]
    OR?: carsWhereInput[]
    NOT?: carsWhereInput | carsWhereInput[]
    placa?: StringFilter<"cars"> | string
    ano?: IntFilter<"cars"> | number
    cor?: StringFilter<"cars"> | string
    rented?: BoolFilter<"cars"> | boolean
    rent?: XOR<RentsNullableScalarRelationFilter, rentsWhereInput> | null
  }

  export type carsOrderByWithRelationInput = {
    placa?: SortOrder
    ano?: SortOrder
    cor?: SortOrder
    rented?: SortOrder
    rent?: rentsOrderByWithRelationInput
  }

  export type carsWhereUniqueInput = Prisma.AtLeast<{
    placa?: string
    AND?: carsWhereInput | carsWhereInput[]
    OR?: carsWhereInput[]
    NOT?: carsWhereInput | carsWhereInput[]
    ano?: IntFilter<"cars"> | number
    cor?: StringFilter<"cars"> | string
    rented?: BoolFilter<"cars"> | boolean
    rent?: XOR<RentsNullableScalarRelationFilter, rentsWhereInput> | null
  }, "placa">

  export type carsOrderByWithAggregationInput = {
    placa?: SortOrder
    ano?: SortOrder
    cor?: SortOrder
    rented?: SortOrder
    _count?: carsCountOrderByAggregateInput
    _avg?: carsAvgOrderByAggregateInput
    _max?: carsMaxOrderByAggregateInput
    _min?: carsMinOrderByAggregateInput
    _sum?: carsSumOrderByAggregateInput
  }

  export type carsScalarWhereWithAggregatesInput = {
    AND?: carsScalarWhereWithAggregatesInput | carsScalarWhereWithAggregatesInput[]
    OR?: carsScalarWhereWithAggregatesInput[]
    NOT?: carsScalarWhereWithAggregatesInput | carsScalarWhereWithAggregatesInput[]
    placa?: StringWithAggregatesFilter<"cars"> | string
    ano?: IntWithAggregatesFilter<"cars"> | number
    cor?: StringWithAggregatesFilter<"cars"> | string
    rented?: BoolWithAggregatesFilter<"cars"> | boolean
  }

  export type rentsCreateInput = {
    data_in: Date | string
    data_out: Date | string
    car: carsCreateNestedOneWithoutRentInput
  }

  export type rentsUncheckedCreateInput = {
    id?: number
    data_in: Date | string
    data_out: Date | string
    car_placa: string
  }

  export type rentsUpdateInput = {
    data_in?: DateTimeFieldUpdateOperationsInput | Date | string
    data_out?: DateTimeFieldUpdateOperationsInput | Date | string
    car?: carsUpdateOneRequiredWithoutRentNestedInput
  }

  export type rentsUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    data_in?: DateTimeFieldUpdateOperationsInput | Date | string
    data_out?: DateTimeFieldUpdateOperationsInput | Date | string
    car_placa?: StringFieldUpdateOperationsInput | string
  }

  export type rentsCreateManyInput = {
    id?: number
    data_in: Date | string
    data_out: Date | string
    car_placa: string
  }

  export type rentsUpdateManyMutationInput = {
    data_in?: DateTimeFieldUpdateOperationsInput | Date | string
    data_out?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type rentsUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    data_in?: DateTimeFieldUpdateOperationsInput | Date | string
    data_out?: DateTimeFieldUpdateOperationsInput | Date | string
    car_placa?: StringFieldUpdateOperationsInput | string
  }

  export type carsCreateInput = {
    placa: string
    ano: number
    cor: string
    rented: boolean
    rent?: rentsCreateNestedOneWithoutCarInput
  }

  export type carsUncheckedCreateInput = {
    placa: string
    ano: number
    cor: string
    rented: boolean
    rent?: rentsUncheckedCreateNestedOneWithoutCarInput
  }

  export type carsUpdateInput = {
    placa?: StringFieldUpdateOperationsInput | string
    ano?: IntFieldUpdateOperationsInput | number
    cor?: StringFieldUpdateOperationsInput | string
    rented?: BoolFieldUpdateOperationsInput | boolean
    rent?: rentsUpdateOneWithoutCarNestedInput
  }

  export type carsUncheckedUpdateInput = {
    placa?: StringFieldUpdateOperationsInput | string
    ano?: IntFieldUpdateOperationsInput | number
    cor?: StringFieldUpdateOperationsInput | string
    rented?: BoolFieldUpdateOperationsInput | boolean
    rent?: rentsUncheckedUpdateOneWithoutCarNestedInput
  }

  export type carsCreateManyInput = {
    placa: string
    ano: number
    cor: string
    rented: boolean
  }

  export type carsUpdateManyMutationInput = {
    placa?: StringFieldUpdateOperationsInput | string
    ano?: IntFieldUpdateOperationsInput | number
    cor?: StringFieldUpdateOperationsInput | string
    rented?: BoolFieldUpdateOperationsInput | boolean
  }

  export type carsUncheckedUpdateManyInput = {
    placa?: StringFieldUpdateOperationsInput | string
    ano?: IntFieldUpdateOperationsInput | number
    cor?: StringFieldUpdateOperationsInput | string
    rented?: BoolFieldUpdateOperationsInput | boolean
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type CarsScalarRelationFilter = {
    is?: carsWhereInput
    isNot?: carsWhereInput
  }

  export type rentsCountOrderByAggregateInput = {
    id?: SortOrder
    data_in?: SortOrder
    data_out?: SortOrder
    car_placa?: SortOrder
  }

  export type rentsAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type rentsMaxOrderByAggregateInput = {
    id?: SortOrder
    data_in?: SortOrder
    data_out?: SortOrder
    car_placa?: SortOrder
  }

  export type rentsMinOrderByAggregateInput = {
    id?: SortOrder
    data_in?: SortOrder
    data_out?: SortOrder
    car_placa?: SortOrder
  }

  export type rentsSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type RentsNullableScalarRelationFilter = {
    is?: rentsWhereInput | null
    isNot?: rentsWhereInput | null
  }

  export type carsCountOrderByAggregateInput = {
    placa?: SortOrder
    ano?: SortOrder
    cor?: SortOrder
    rented?: SortOrder
  }

  export type carsAvgOrderByAggregateInput = {
    ano?: SortOrder
  }

  export type carsMaxOrderByAggregateInput = {
    placa?: SortOrder
    ano?: SortOrder
    cor?: SortOrder
    rented?: SortOrder
  }

  export type carsMinOrderByAggregateInput = {
    placa?: SortOrder
    ano?: SortOrder
    cor?: SortOrder
    rented?: SortOrder
  }

  export type carsSumOrderByAggregateInput = {
    ano?: SortOrder
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type carsCreateNestedOneWithoutRentInput = {
    create?: XOR<carsCreateWithoutRentInput, carsUncheckedCreateWithoutRentInput>
    connectOrCreate?: carsCreateOrConnectWithoutRentInput
    connect?: carsWhereUniqueInput
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type carsUpdateOneRequiredWithoutRentNestedInput = {
    create?: XOR<carsCreateWithoutRentInput, carsUncheckedCreateWithoutRentInput>
    connectOrCreate?: carsCreateOrConnectWithoutRentInput
    upsert?: carsUpsertWithoutRentInput
    connect?: carsWhereUniqueInput
    update?: XOR<XOR<carsUpdateToOneWithWhereWithoutRentInput, carsUpdateWithoutRentInput>, carsUncheckedUpdateWithoutRentInput>
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type rentsCreateNestedOneWithoutCarInput = {
    create?: XOR<rentsCreateWithoutCarInput, rentsUncheckedCreateWithoutCarInput>
    connectOrCreate?: rentsCreateOrConnectWithoutCarInput
    connect?: rentsWhereUniqueInput
  }

  export type rentsUncheckedCreateNestedOneWithoutCarInput = {
    create?: XOR<rentsCreateWithoutCarInput, rentsUncheckedCreateWithoutCarInput>
    connectOrCreate?: rentsCreateOrConnectWithoutCarInput
    connect?: rentsWhereUniqueInput
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type rentsUpdateOneWithoutCarNestedInput = {
    create?: XOR<rentsCreateWithoutCarInput, rentsUncheckedCreateWithoutCarInput>
    connectOrCreate?: rentsCreateOrConnectWithoutCarInput
    upsert?: rentsUpsertWithoutCarInput
    disconnect?: rentsWhereInput | boolean
    delete?: rentsWhereInput | boolean
    connect?: rentsWhereUniqueInput
    update?: XOR<XOR<rentsUpdateToOneWithWhereWithoutCarInput, rentsUpdateWithoutCarInput>, rentsUncheckedUpdateWithoutCarInput>
  }

  export type rentsUncheckedUpdateOneWithoutCarNestedInput = {
    create?: XOR<rentsCreateWithoutCarInput, rentsUncheckedCreateWithoutCarInput>
    connectOrCreate?: rentsCreateOrConnectWithoutCarInput
    upsert?: rentsUpsertWithoutCarInput
    disconnect?: rentsWhereInput | boolean
    delete?: rentsWhereInput | boolean
    connect?: rentsWhereUniqueInput
    update?: XOR<XOR<rentsUpdateToOneWithWhereWithoutCarInput, rentsUpdateWithoutCarInput>, rentsUncheckedUpdateWithoutCarInput>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type carsCreateWithoutRentInput = {
    placa: string
    ano: number
    cor: string
    rented: boolean
  }

  export type carsUncheckedCreateWithoutRentInput = {
    placa: string
    ano: number
    cor: string
    rented: boolean
  }

  export type carsCreateOrConnectWithoutRentInput = {
    where: carsWhereUniqueInput
    create: XOR<carsCreateWithoutRentInput, carsUncheckedCreateWithoutRentInput>
  }

  export type carsUpsertWithoutRentInput = {
    update: XOR<carsUpdateWithoutRentInput, carsUncheckedUpdateWithoutRentInput>
    create: XOR<carsCreateWithoutRentInput, carsUncheckedCreateWithoutRentInput>
    where?: carsWhereInput
  }

  export type carsUpdateToOneWithWhereWithoutRentInput = {
    where?: carsWhereInput
    data: XOR<carsUpdateWithoutRentInput, carsUncheckedUpdateWithoutRentInput>
  }

  export type carsUpdateWithoutRentInput = {
    placa?: StringFieldUpdateOperationsInput | string
    ano?: IntFieldUpdateOperationsInput | number
    cor?: StringFieldUpdateOperationsInput | string
    rented?: BoolFieldUpdateOperationsInput | boolean
  }

  export type carsUncheckedUpdateWithoutRentInput = {
    placa?: StringFieldUpdateOperationsInput | string
    ano?: IntFieldUpdateOperationsInput | number
    cor?: StringFieldUpdateOperationsInput | string
    rented?: BoolFieldUpdateOperationsInput | boolean
  }

  export type rentsCreateWithoutCarInput = {
    data_in: Date | string
    data_out: Date | string
  }

  export type rentsUncheckedCreateWithoutCarInput = {
    id?: number
    data_in: Date | string
    data_out: Date | string
  }

  export type rentsCreateOrConnectWithoutCarInput = {
    where: rentsWhereUniqueInput
    create: XOR<rentsCreateWithoutCarInput, rentsUncheckedCreateWithoutCarInput>
  }

  export type rentsUpsertWithoutCarInput = {
    update: XOR<rentsUpdateWithoutCarInput, rentsUncheckedUpdateWithoutCarInput>
    create: XOR<rentsCreateWithoutCarInput, rentsUncheckedCreateWithoutCarInput>
    where?: rentsWhereInput
  }

  export type rentsUpdateToOneWithWhereWithoutCarInput = {
    where?: rentsWhereInput
    data: XOR<rentsUpdateWithoutCarInput, rentsUncheckedUpdateWithoutCarInput>
  }

  export type rentsUpdateWithoutCarInput = {
    data_in?: DateTimeFieldUpdateOperationsInput | Date | string
    data_out?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type rentsUncheckedUpdateWithoutCarInput = {
    id?: IntFieldUpdateOperationsInput | number
    data_in?: DateTimeFieldUpdateOperationsInput | Date | string
    data_out?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}