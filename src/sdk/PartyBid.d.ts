/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import {
  ethers,
  EventFilter,
  Signer,
  BigNumber,
  BigNumberish,
  PopulatedTransaction,
  BaseContract,
  ContractTransaction,
  Overrides,
  PayableOverrides,
  CallOverrides,
} from "ethers";
import { BytesLike } from "@ethersproject/bytes";
import { Listener, Provider } from "@ethersproject/providers";
import { FunctionFragment, EventFragment, Result } from "@ethersproject/abi";
import type { TypedEventFilter, TypedEvent, TypedListener } from "./common";

interface PartyBidInterface extends ethers.utils.Interface {
  functions: {
    "VERSION()": FunctionFragment;
    "auctionId()": FunctionFragment;
    "bid()": FunctionFragment;
    "claim(address)": FunctionFragment;
    "claimed(address)": FunctionFragment;
    "contribute()": FunctionFragment;
    "contributions(address,uint256)": FunctionFragment;
    "emergencyCall(address,bytes)": FunctionFragment;
    "emergencyForceLost()": FunctionFragment;
    "emergencyWithdrawEth(uint256)": FunctionFragment;
    "finalize()": FunctionFragment;
    "getClaimAmounts(address)": FunctionFragment;
    "getMaximumBid()": FunctionFragment;
    "highestBid()": FunctionFragment;
    "initialize(address,address,uint256,uint256,address,uint256,string,string)": FunctionFragment;
    "marketWrapper()": FunctionFragment;
    "name()": FunctionFragment;
    "nftContract()": FunctionFragment;
    "onERC721Received(address,address,uint256,bytes)": FunctionFragment;
    "partyDAOMultisig()": FunctionFragment;
    "partyStatus()": FunctionFragment;
    "splitBasisPoints()": FunctionFragment;
    "splitRecipient()": FunctionFragment;
    "symbol()": FunctionFragment;
    "tokenId()": FunctionFragment;
    "tokenVault()": FunctionFragment;
    "tokenVaultFactory()": FunctionFragment;
    "totalContributed(address)": FunctionFragment;
    "totalContributedToParty()": FunctionFragment;
    "totalEthUsedForBid(address)": FunctionFragment;
    "totalSpent()": FunctionFragment;
    "valueToTokens(uint256)": FunctionFragment;
    "weth()": FunctionFragment;
  };

  encodeFunctionData(functionFragment: "VERSION", values?: undefined): string;
  encodeFunctionData(functionFragment: "auctionId", values?: undefined): string;
  encodeFunctionData(functionFragment: "bid", values?: undefined): string;
  encodeFunctionData(functionFragment: "claim", values: [string]): string;
  encodeFunctionData(functionFragment: "claimed", values: [string]): string;
  encodeFunctionData(
    functionFragment: "contribute",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "contributions",
    values: [string, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "emergencyCall",
    values: [string, BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "emergencyForceLost",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "emergencyWithdrawEth",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(functionFragment: "finalize", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "getClaimAmounts",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "getMaximumBid",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "highestBid",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "initialize",
    values: [
      string,
      string,
      BigNumberish,
      BigNumberish,
      string,
      BigNumberish,
      string,
      string
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "marketWrapper",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "name", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "nftContract",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "onERC721Received",
    values: [string, string, BigNumberish, BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "partyDAOMultisig",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "partyStatus",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "splitBasisPoints",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "splitRecipient",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "symbol", values?: undefined): string;
  encodeFunctionData(functionFragment: "tokenId", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "tokenVault",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "tokenVaultFactory",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "totalContributed",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "totalContributedToParty",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "totalEthUsedForBid",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "totalSpent",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "valueToTokens",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(functionFragment: "weth", values?: undefined): string;

  decodeFunctionResult(functionFragment: "VERSION", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "auctionId", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "bid", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "claim", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "claimed", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "contribute", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "contributions",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "emergencyCall",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "emergencyForceLost",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "emergencyWithdrawEth",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "finalize", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "getClaimAmounts",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getMaximumBid",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "highestBid", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "initialize", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "marketWrapper",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "name", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "nftContract",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "onERC721Received",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "partyDAOMultisig",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "partyStatus",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "splitBasisPoints",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "splitRecipient",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "symbol", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "tokenId", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "tokenVault", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "tokenVaultFactory",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "totalContributed",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "totalContributedToParty",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "totalEthUsedForBid",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "totalSpent", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "valueToTokens",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "weth", data: BytesLike): Result;

  events: {
    "Bid(uint256)": EventFragment;
    "Claimed(address,uint256,uint256,uint256)": EventFragment;
    "Contributed(address,uint256,uint256,uint256)": EventFragment;
    "Finalized(uint8,uint256,uint256,uint256)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "Bid"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "Claimed"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "Contributed"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "Finalized"): EventFragment;
}

export type BidEvent = TypedEvent<[BigNumber] & { amount: BigNumber }>;

export type ClaimedEvent = TypedEvent<
  [string, BigNumber, BigNumber, BigNumber] & {
    contributor: string;
    totalContributed: BigNumber;
    excessContribution: BigNumber;
    tokenAmount: BigNumber;
  }
>;

export type ContributedEvent = TypedEvent<
  [string, BigNumber, BigNumber, BigNumber] & {
    contributor: string;
    amount: BigNumber;
    previousTotalContributedToParty: BigNumber;
    totalFromContributor: BigNumber;
  }
>;

export type FinalizedEvent = TypedEvent<
  [number, BigNumber, BigNumber, BigNumber] & {
    result: number;
    totalSpent: BigNumber;
    fee: BigNumber;
    totalContributed: BigNumber;
  }
>;

export class PartyBid extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  listeners<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter?: TypedEventFilter<EventArgsArray, EventArgsObject>
  ): Array<TypedListener<EventArgsArray, EventArgsObject>>;
  off<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  on<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  once<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  removeListener<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  removeAllListeners<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>
  ): this;

  listeners(eventName?: string): Array<Listener>;
  off(eventName: string, listener: Listener): this;
  on(eventName: string, listener: Listener): this;
  once(eventName: string, listener: Listener): this;
  removeListener(eventName: string, listener: Listener): this;
  removeAllListeners(eventName?: string): this;

  queryFilter<EventArgsArray extends Array<any>, EventArgsObject>(
    event: TypedEventFilter<EventArgsArray, EventArgsObject>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TypedEvent<EventArgsArray & EventArgsObject>>>;

  interface: PartyBidInterface;

  functions: {
    VERSION(overrides?: CallOverrides): Promise<[number]>;

    auctionId(overrides?: CallOverrides): Promise<[BigNumber]>;

    bid(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    claim(
      _contributor: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    claimed(arg0: string, overrides?: CallOverrides): Promise<[boolean]>;

    contribute(
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    contributions(
      arg0: string,
      arg1: BigNumberish,
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, BigNumber] & {
        amount: BigNumber;
        previousTotalContributedToParty: BigNumber;
      }
    >;

    emergencyCall(
      _contract: string,
      _calldata: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    emergencyForceLost(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    emergencyWithdrawEth(
      _value: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    finalize(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    getClaimAmounts(
      _contributor: string,
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, BigNumber] & {
        _tokenAmount: BigNumber;
        _ethAmount: BigNumber;
      }
    >;

    getMaximumBid(
      overrides?: CallOverrides
    ): Promise<[BigNumber] & { _maxBid: BigNumber }>;

    highestBid(overrides?: CallOverrides): Promise<[BigNumber]>;

    initialize(
      _marketWrapper: string,
      _nftContract: string,
      _tokenId: BigNumberish,
      _auctionId: BigNumberish,
      _splitRecipient: string,
      _splitBasisPoints: BigNumberish,
      _name: string,
      _symbol: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    marketWrapper(overrides?: CallOverrides): Promise<[string]>;

    name(overrides?: CallOverrides): Promise<[string]>;

    nftContract(overrides?: CallOverrides): Promise<[string]>;

    onERC721Received(
      arg0: string,
      arg1: string,
      arg2: BigNumberish,
      arg3: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    partyDAOMultisig(overrides?: CallOverrides): Promise<[string]>;

    partyStatus(overrides?: CallOverrides): Promise<[number]>;

    splitBasisPoints(overrides?: CallOverrides): Promise<[BigNumber]>;

    splitRecipient(overrides?: CallOverrides): Promise<[string]>;

    symbol(overrides?: CallOverrides): Promise<[string]>;

    tokenId(overrides?: CallOverrides): Promise<[BigNumber]>;

    tokenVault(overrides?: CallOverrides): Promise<[string]>;

    tokenVaultFactory(overrides?: CallOverrides): Promise<[string]>;

    totalContributed(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    totalContributedToParty(overrides?: CallOverrides): Promise<[BigNumber]>;

    totalEthUsedForBid(
      _contributor: string,
      overrides?: CallOverrides
    ): Promise<[BigNumber] & { _total: BigNumber }>;

    totalSpent(overrides?: CallOverrides): Promise<[BigNumber]>;

    valueToTokens(
      _value: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[BigNumber] & { _tokens: BigNumber }>;

    weth(overrides?: CallOverrides): Promise<[string]>;
  };

  VERSION(overrides?: CallOverrides): Promise<number>;

  auctionId(overrides?: CallOverrides): Promise<BigNumber>;

  bid(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  claim(
    _contributor: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  claimed(arg0: string, overrides?: CallOverrides): Promise<boolean>;

  contribute(
    overrides?: PayableOverrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  contributions(
    arg0: string,
    arg1: BigNumberish,
    overrides?: CallOverrides
  ): Promise<
    [BigNumber, BigNumber] & {
      amount: BigNumber;
      previousTotalContributedToParty: BigNumber;
    }
  >;

  emergencyCall(
    _contract: string,
    _calldata: BytesLike,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  emergencyForceLost(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  emergencyWithdrawEth(
    _value: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  finalize(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  getClaimAmounts(
    _contributor: string,
    overrides?: CallOverrides
  ): Promise<
    [BigNumber, BigNumber] & { _tokenAmount: BigNumber; _ethAmount: BigNumber }
  >;

  getMaximumBid(overrides?: CallOverrides): Promise<BigNumber>;

  highestBid(overrides?: CallOverrides): Promise<BigNumber>;

  initialize(
    _marketWrapper: string,
    _nftContract: string,
    _tokenId: BigNumberish,
    _auctionId: BigNumberish,
    _splitRecipient: string,
    _splitBasisPoints: BigNumberish,
    _name: string,
    _symbol: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  marketWrapper(overrides?: CallOverrides): Promise<string>;

  name(overrides?: CallOverrides): Promise<string>;

  nftContract(overrides?: CallOverrides): Promise<string>;

  onERC721Received(
    arg0: string,
    arg1: string,
    arg2: BigNumberish,
    arg3: BytesLike,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  partyDAOMultisig(overrides?: CallOverrides): Promise<string>;

  partyStatus(overrides?: CallOverrides): Promise<number>;

  splitBasisPoints(overrides?: CallOverrides): Promise<BigNumber>;

  splitRecipient(overrides?: CallOverrides): Promise<string>;

  symbol(overrides?: CallOverrides): Promise<string>;

  tokenId(overrides?: CallOverrides): Promise<BigNumber>;

  tokenVault(overrides?: CallOverrides): Promise<string>;

  tokenVaultFactory(overrides?: CallOverrides): Promise<string>;

  totalContributed(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;

  totalContributedToParty(overrides?: CallOverrides): Promise<BigNumber>;

  totalEthUsedForBid(
    _contributor: string,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  totalSpent(overrides?: CallOverrides): Promise<BigNumber>;

  valueToTokens(
    _value: BigNumberish,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  weth(overrides?: CallOverrides): Promise<string>;

  callStatic: {
    VERSION(overrides?: CallOverrides): Promise<number>;

    auctionId(overrides?: CallOverrides): Promise<BigNumber>;

    bid(overrides?: CallOverrides): Promise<void>;

    claim(_contributor: string, overrides?: CallOverrides): Promise<void>;

    claimed(arg0: string, overrides?: CallOverrides): Promise<boolean>;

    contribute(overrides?: CallOverrides): Promise<void>;

    contributions(
      arg0: string,
      arg1: BigNumberish,
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, BigNumber] & {
        amount: BigNumber;
        previousTotalContributedToParty: BigNumber;
      }
    >;

    emergencyCall(
      _contract: string,
      _calldata: BytesLike,
      overrides?: CallOverrides
    ): Promise<[boolean, string] & { _success: boolean; _returnData: string }>;

    emergencyForceLost(overrides?: CallOverrides): Promise<void>;

    emergencyWithdrawEth(
      _value: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    finalize(overrides?: CallOverrides): Promise<void>;

    getClaimAmounts(
      _contributor: string,
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, BigNumber] & {
        _tokenAmount: BigNumber;
        _ethAmount: BigNumber;
      }
    >;

    getMaximumBid(overrides?: CallOverrides): Promise<BigNumber>;

    highestBid(overrides?: CallOverrides): Promise<BigNumber>;

    initialize(
      _marketWrapper: string,
      _nftContract: string,
      _tokenId: BigNumberish,
      _auctionId: BigNumberish,
      _splitRecipient: string,
      _splitBasisPoints: BigNumberish,
      _name: string,
      _symbol: string,
      overrides?: CallOverrides
    ): Promise<void>;

    marketWrapper(overrides?: CallOverrides): Promise<string>;

    name(overrides?: CallOverrides): Promise<string>;

    nftContract(overrides?: CallOverrides): Promise<string>;

    onERC721Received(
      arg0: string,
      arg1: string,
      arg2: BigNumberish,
      arg3: BytesLike,
      overrides?: CallOverrides
    ): Promise<string>;

    partyDAOMultisig(overrides?: CallOverrides): Promise<string>;

    partyStatus(overrides?: CallOverrides): Promise<number>;

    splitBasisPoints(overrides?: CallOverrides): Promise<BigNumber>;

    splitRecipient(overrides?: CallOverrides): Promise<string>;

    symbol(overrides?: CallOverrides): Promise<string>;

    tokenId(overrides?: CallOverrides): Promise<BigNumber>;

    tokenVault(overrides?: CallOverrides): Promise<string>;

    tokenVaultFactory(overrides?: CallOverrides): Promise<string>;

    totalContributed(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    totalContributedToParty(overrides?: CallOverrides): Promise<BigNumber>;

    totalEthUsedForBid(
      _contributor: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    totalSpent(overrides?: CallOverrides): Promise<BigNumber>;

    valueToTokens(
      _value: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    weth(overrides?: CallOverrides): Promise<string>;
  };

  filters: {
    "Bid(uint256)"(
      amount?: null
    ): TypedEventFilter<[BigNumber], { amount: BigNumber }>;

    Bid(amount?: null): TypedEventFilter<[BigNumber], { amount: BigNumber }>;

    "Claimed(address,uint256,uint256,uint256)"(
      contributor?: string | null,
      totalContributed?: null,
      excessContribution?: null,
      tokenAmount?: null
    ): TypedEventFilter<
      [string, BigNumber, BigNumber, BigNumber],
      {
        contributor: string;
        totalContributed: BigNumber;
        excessContribution: BigNumber;
        tokenAmount: BigNumber;
      }
    >;

    Claimed(
      contributor?: string | null,
      totalContributed?: null,
      excessContribution?: null,
      tokenAmount?: null
    ): TypedEventFilter<
      [string, BigNumber, BigNumber, BigNumber],
      {
        contributor: string;
        totalContributed: BigNumber;
        excessContribution: BigNumber;
        tokenAmount: BigNumber;
      }
    >;

    "Contributed(address,uint256,uint256,uint256)"(
      contributor?: string | null,
      amount?: null,
      previousTotalContributedToParty?: null,
      totalFromContributor?: null
    ): TypedEventFilter<
      [string, BigNumber, BigNumber, BigNumber],
      {
        contributor: string;
        amount: BigNumber;
        previousTotalContributedToParty: BigNumber;
        totalFromContributor: BigNumber;
      }
    >;

    Contributed(
      contributor?: string | null,
      amount?: null,
      previousTotalContributedToParty?: null,
      totalFromContributor?: null
    ): TypedEventFilter<
      [string, BigNumber, BigNumber, BigNumber],
      {
        contributor: string;
        amount: BigNumber;
        previousTotalContributedToParty: BigNumber;
        totalFromContributor: BigNumber;
      }
    >;

    "Finalized(uint8,uint256,uint256,uint256)"(
      result?: null,
      totalSpent?: null,
      fee?: null,
      totalContributed?: null
    ): TypedEventFilter<
      [number, BigNumber, BigNumber, BigNumber],
      {
        result: number;
        totalSpent: BigNumber;
        fee: BigNumber;
        totalContributed: BigNumber;
      }
    >;

    Finalized(
      result?: null,
      totalSpent?: null,
      fee?: null,
      totalContributed?: null
    ): TypedEventFilter<
      [number, BigNumber, BigNumber, BigNumber],
      {
        result: number;
        totalSpent: BigNumber;
        fee: BigNumber;
        totalContributed: BigNumber;
      }
    >;
  };

  estimateGas: {
    VERSION(overrides?: CallOverrides): Promise<BigNumber>;

    auctionId(overrides?: CallOverrides): Promise<BigNumber>;

    bid(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    claim(
      _contributor: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    claimed(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;

    contribute(
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    contributions(
      arg0: string,
      arg1: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    emergencyCall(
      _contract: string,
      _calldata: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    emergencyForceLost(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    emergencyWithdrawEth(
      _value: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    finalize(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    getClaimAmounts(
      _contributor: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getMaximumBid(overrides?: CallOverrides): Promise<BigNumber>;

    highestBid(overrides?: CallOverrides): Promise<BigNumber>;

    initialize(
      _marketWrapper: string,
      _nftContract: string,
      _tokenId: BigNumberish,
      _auctionId: BigNumberish,
      _splitRecipient: string,
      _splitBasisPoints: BigNumberish,
      _name: string,
      _symbol: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    marketWrapper(overrides?: CallOverrides): Promise<BigNumber>;

    name(overrides?: CallOverrides): Promise<BigNumber>;

    nftContract(overrides?: CallOverrides): Promise<BigNumber>;

    onERC721Received(
      arg0: string,
      arg1: string,
      arg2: BigNumberish,
      arg3: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    partyDAOMultisig(overrides?: CallOverrides): Promise<BigNumber>;

    partyStatus(overrides?: CallOverrides): Promise<BigNumber>;

    splitBasisPoints(overrides?: CallOverrides): Promise<BigNumber>;

    splitRecipient(overrides?: CallOverrides): Promise<BigNumber>;

    symbol(overrides?: CallOverrides): Promise<BigNumber>;

    tokenId(overrides?: CallOverrides): Promise<BigNumber>;

    tokenVault(overrides?: CallOverrides): Promise<BigNumber>;

    tokenVaultFactory(overrides?: CallOverrides): Promise<BigNumber>;

    totalContributed(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    totalContributedToParty(overrides?: CallOverrides): Promise<BigNumber>;

    totalEthUsedForBid(
      _contributor: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    totalSpent(overrides?: CallOverrides): Promise<BigNumber>;

    valueToTokens(
      _value: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    weth(overrides?: CallOverrides): Promise<BigNumber>;
  };

  populateTransaction: {
    VERSION(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    auctionId(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    bid(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    claim(
      _contributor: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    claimed(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    contribute(
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    contributions(
      arg0: string,
      arg1: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    emergencyCall(
      _contract: string,
      _calldata: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    emergencyForceLost(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    emergencyWithdrawEth(
      _value: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    finalize(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    getClaimAmounts(
      _contributor: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getMaximumBid(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    highestBid(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    initialize(
      _marketWrapper: string,
      _nftContract: string,
      _tokenId: BigNumberish,
      _auctionId: BigNumberish,
      _splitRecipient: string,
      _splitBasisPoints: BigNumberish,
      _name: string,
      _symbol: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    marketWrapper(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    name(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    nftContract(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    onERC721Received(
      arg0: string,
      arg1: string,
      arg2: BigNumberish,
      arg3: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    partyDAOMultisig(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    partyStatus(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    splitBasisPoints(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    splitRecipient(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    symbol(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    tokenId(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    tokenVault(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    tokenVaultFactory(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    totalContributed(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    totalContributedToParty(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    totalEthUsedForBid(
      _contributor: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    totalSpent(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    valueToTokens(
      _value: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    weth(overrides?: CallOverrides): Promise<PopulatedTransaction>;
  };
}
